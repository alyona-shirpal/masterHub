"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const app_1 = require("./app");
const config_1 = require("./config");
const server = http.createServer(app_1.app);
server.listen(config_1.config.PORT, () => {
    console.log(`Listening on port ${config_1.config.PORT}`);
});
process.on('uncaughtException', error => {
    console.log(error);
    server.close(() => {
        process.exit();
    });
});
process.on('unhandledRejection', error => {
    console.log(error);
    server.close(() => {
        process.exit();
    });
});
//# sourceMappingURL=index.js.map