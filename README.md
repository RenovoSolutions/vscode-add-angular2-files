![](images/icon.png)

# VS Code Angular2 Add Files

This extension allows you to add **Angular2 Renovo typescript components including snippets** to your VS Code project.

> forked from [Sebastian Baar](https://github.com/sebastianbaar)



## Feature

Right click on a file or a folder in your current project. There are two options added to the context menu `Add Angular2 Files`:

### Add Angular2 Files

This command adds the following files to your new folder (let's assume you typed in `home`):
```
home/home.component.ts
home/home.component.html
home/home.component.tests.ts
```


## How to install: (you will want to update the version number)
```
code --install-extension vscode-add-angular2-renovo-files-1.1.0.vsix
```

## Work Flow
Install vsce - Publishing Tool
```
npm install -g vsce
```


## Build command
```
npm run prepublish
```

## Publish command
```
npm run publish
```

# License

MIT
