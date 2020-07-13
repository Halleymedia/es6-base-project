# ES6 Base Project

Blank ES6 project with Babel7, Webpack4 and Jest, with full debug support.

## Getting started
First, install dependencies by running the command:
```
npm install
```

## Build
Build the application by running the command:
```
dotnet run build
```
Or by pressing `Ctrl`+`Shift`+`B` on Visual Studio Code.

The `Production` configuration of Webpack will be used. You will find build output in the `dist` directory.

## Launch & Debug
Just hit `F5` on Visual Studio Code to launch the application in Chrome with full debug support. Just be sure to have the [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) extension installed.

Project build will occur as a pre-launch task.

In case you want to just launch the project without debugging, then run the command:

```
npm run dev
```
Then open your browser and point it to `http://localhost:3000`

The `Development` configuration of Webpack will be used.

## Live reload
Whenever you change any source JavaScript file, the [Live Reload](https://webpack.js.org/configuration/dev-server/#devserverlivereload) feature of `webpack-dev-server` will make sure those changes will be build and shown in the browser without actually re-launching the application. [Hot module replacement](https://webpack.js.org/concepts/hot-module-replacement/) is enabled so the page won't even full-reload.

## Test
Execute unit tests by running the command:
```
npm run test
```

Alternatively, you can individually run tests with the _Code Lens_ feature of Visual Studio Code if you install the extension [Jest Test Explorer](https://marketplace.visualstudio.com/items?itemName=kavod-io.vscode-jest-test-adapter). Tests will also be available from the _Test_ panel of Visual Studio Code.
