import * as vscode from 'vscode';
import { AddFiles } from '../src/add-files';
import * as fs from 'fs';
import * as path from 'path';
import * as rimraf from 'rimraf';
import * as assert from 'assert';

const testPath = path.join(__dirname, 'test-path');

suite("Extension Tests:", () => {

    suite("adding files command", () => {

        suiteTeardown((done) => {
            checkIfTestFolderExistsAndDelete(done);
        });

        const addFiles = new AddFiles();

        test('should create a new folder ', (done) => {
            addFiles.createFolder(testPath)
                .then((folderName) => {
                    assert.strictEqual(folderName, testPath);
                    assert.strictEqual(fs.existsSync(testPath), true);
                    checkIfTestFolderExistsAndDelete();
                    done();
                });
        });

        test('should alert if folder already exists', (done) => {
            addFiles.createFolder(testPath).then(
                (folderName) => {
                    addFiles.createFolder(testPath)
                        .then((folderName) => {
                            // error handling test
                            checkIfTestFolderExistsAndDelete();
                            done();
                        }, (err) => {
                            assert.strictEqual(err, 'Folder already exists');
                            checkIfTestFolderExistsAndDelete();
                            done();
                        });
                },
                (err) => {
                    console.log(err);
                });
        });

        test('should create the files', (done) => {
            addFiles.createFolder(testPath).then(
                (folderName) => {
                    addFiles.createFiles(testPath)
                        .then((folderName) => {
                            assert.strictEqual(folderName, testPath);
                            assert.strictEqual(fs.existsSync(testPath), true);
                            fs.readdir(testPath, (err, files) => {
                                assert.strictEqual(files.length, 3);
                                checkIfTestFolderExistsAndDelete();
                                done();
                            });
                        });
                },
                (err) => {
                    checkIfTestFolderExistsAndDelete();
                    console.log(err);
                });
        });
    });

});

function checkIfTestFolderExistsAndDelete(done?: MochaDone) {
    if (fs.exists(testPath) || testPath !== '/') {
        rimraf(testPath, () => { if (done) done(); });
    }
}
function checkIfOutTestFolderExistsAndDelete(done?: MochaDone) {
    if (path.join(testPath, 'shared') !== '/') {
        rimraf(path.join(testPath, 'shared'), () => { if (done) done(); });
    }
}