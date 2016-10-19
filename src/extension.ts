import { ExtensionContext, commands, window } from 'vscode';
import { AddFiles } from './add-files';

export function activate(context: ExtensionContext) {
  console.log('Congratulations, your extension is now active!');

  var addAngular2FilesComponent = commands.registerCommand('extension.addAngular2RenovoComponent', (args) => {
    const addFiles: AddFiles = new AddFiles();
    addFiles.showFileNameDialog(args)
      .then(addFiles.createFolder)
      .then(addFiles.createComponentFiles)
      .then(addFiles.openComponentFileInEditor)
      .catch((err) => {
        if (err) {
          window.showErrorMessage(err);
        }
      });
  });

  var addAngular2FilesService = commands.registerCommand('extension.addAngular2RenovoService', (args) => {
    const addFiles: AddFiles = new AddFiles();
    addFiles.showFileNameDialog(args)
      .then(addFiles.createFolder)
      .then(addFiles.createServiceFiles)
      .then(addFiles.openServiceFileInEditor)
      .catch((err) => {
        if (err) {
          window.showErrorMessage(err);
        }
      });
  });

  context.subscriptions.push(addAngular2FilesComponent);
  context.subscriptions.push(addAngular2FilesService);
}