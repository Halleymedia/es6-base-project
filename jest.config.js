const path = require("path");
module.exports = {
    testEnvironment: "node",
    transform: {
      "\\.js$": ["babel-jest", { configFile: path.resolve(__dirname, './babel.config.js') }]
    },
    setupFiles: [
      path.resolve(__dirname, "./jest.init.js")
    ]
};