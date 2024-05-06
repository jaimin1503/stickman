import express from "express";
import { WebSocketServer } from "ws";
const app = express();

const wss = new WebSocketServer({ port: 8000 });

wss.on("connection", function connection(ws) {
  ws.on("error", console.error);

  ws.on("playerMove", (position) => {
    ws.send(position);
  });
});

app.listen(5555, () => {
  console.log("server running ...");
});
