"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws");
const app = (0, express_1.default)();
const wss = new ws_1.WebSocketServer({ port: 8000 });
wss.on("connection", function connection(ws) {
    ws.on("error", console.error);
    ws.on("playerMove", (position) => {
        ws.send(position);
    });
});
app.listen(5555, () => {
    console.log("server running ...");
});
