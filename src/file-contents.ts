export class FileContents {

    private camelCase(input: string): string {
        return input.replace(/-([a-z])/ig, function (all, letter) {
            return letter.toUpperCase();
        });
    }

    public createBarrel(inputName: string): string {
        var inputUpperCase: string;
        inputUpperCase = inputName.charAt(0).toUpperCase() + inputName.slice(1);
        inputUpperCase = this.camelCase(inputUpperCase);

        return `export { ${inputUpperCase}Component } from './${inputName}.component';`
    }

    public componentContent(inputName: string): string {
        var inputUpperCase: string;
        inputUpperCase = inputName.charAt(0).toUpperCase() + inputName.slice(1);
        inputUpperCase = this.camelCase(inputUpperCase);

        var componentContent: string = "import { Component, OnInit } from '@angular/core';\n" +
            "\n" +
            "@Component({\n" +
            "\tselector: '" + inputName + "',\n" +
            "\ttemplate: require('./" + inputName + ".component.html')\n" +
            "})\n" +
            "\n" +
            "export class " + inputUpperCase + "Component implements OnInit {\n" +
            "\n" +
            "\tconstructor() { }\n" +
            "\n" +
            "\tngOnInit() { }\n" +
            "}";
        return componentContent;
    }

    public serviceContent(inputName: string): string {
        var inputUpperCase: string;
        inputUpperCase = inputName.charAt(0).toUpperCase() + inputName.slice(1);
        inputUpperCase = this.camelCase(inputUpperCase);

        var componentContent: string = "import { components} from 'typescript-angular-components';\n" +
            "\n" +
            "export var serviceName: string = '"+inputName+"';\n" +
            "\n" +
            "export interface I"+inputUpperCase+" {\n" +
            "}\n" +
            "\n" +
            "export class "+inputUpperCase+" implements I"+inputUpperCase+" {\n" +
            "\n" +
            "}";
        return componentContent;
    }

    public templateContent(inputName: string): string {
        var inputUpperCase: string;
        inputUpperCase = inputName.charAt(0).toUpperCase() + inputName.slice(1);
        inputUpperCase = this.camelCase(inputUpperCase);
        var templateContent: string = `<div class="${inputName}"> Hello ${inputUpperCase}Component! </div>`;
        return templateContent;
    }

    public cssContent(inputName: string): string {
        var inputUpperCase: string = inputName.charAt(0).toUpperCase() + inputName.slice(1);
        var cssContent: string = `.${inputName} {\n\n}`;
        return cssContent;
    }

    public specComponentContent(inputName: string): string {
        var inputUpperCase: string;
        inputUpperCase = inputName.charAt(0).toUpperCase() + inputName.slice(1);
        inputUpperCase = this.camelCase(inputUpperCase);

        var specContent: string = "import { " + inputUpperCase + "Component } from './" + inputName + ".component';\n" +
            "\n" +
            "describe('a " + inputName + " component', () => {\n" +
            "\tlet " + inputName + "Component : " + inputUpperCase + "Component;\n" +
            "\n" +
            "\t// register all needed dependencies\n" +
            "\tbeforeEach(() => {\n" +
            "\t\t" + inputName + "Component = new " + inputUpperCase + "Component();\n" +
            "\t});\n" +
            "\n" +

            "\tit('should have an instance', () => {\n" +
            "\t\texpect(" + inputName + "Component).to.not.be.null;\n" +
            "\t});\n" +
            "});";
        return specContent;
    }

    

    public specServiceContent(inputName: string): string {
        var inputUpperCase: string;
        inputUpperCase = inputName.charAt(0).toUpperCase() + inputName.slice(1);
        inputUpperCase = this.camelCase(inputUpperCase);

        var specContent: string = "import { " + inputUpperCase + "Service } from './" + inputName + ".service';\n" +
            "\n" +
            "describe('a " + inputName + " service', () => {\n" +
            "\tlet " + inputName + "Service : " + inputUpperCase + "Service;\n" +
            "\n" +
            // "\t// register all needed dependencies\n" +
            // "\tbeforeEach(() => {\n" +
            // "\t\t" + inputName + "Component = new " + inputUpperCase + "Component();\n" +
            // "\t});\n" +
            // "\n" +

            "\tit('should have an instance', () => {\n" +
            "\t\texpect(" + inputName + "Service).to.not.be.null;\n" +
            "\t});\n" +
            "});";
        return specContent;
    }

}