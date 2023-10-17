"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../app"));
const config_1 = require("../config");
const http_1 = __importDefault(require("http"));
const httpServer = http_1.default.createServer(app_1.default);
const port = config_1.PORT || 3000;
httpServer.listen(port, () => {
    console.log('listening on *:' + port);
});
