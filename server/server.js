const express = require("express");
const path = require("path");
const socketIo = require("socket.io");
const port = 5000;

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

app.use("/api", require("./routes/card.routes"));

let server = app.listen(port);

let io = socketIo(server);
let players = [];

io.on("connection", (socket) => {
  console.log("socket connected ", socket.id);
  players.push(socket.id);
  console.log(players);

  socket.on("disconnect", function () {
    console.log("A user disconnected: " + socket.id);
    players = players.filter((player) => player !== socket.id);
  });

  socket.on("CITY_PLAN_BUTTON", (data) => {
    console.log("SERVER : DATI DAL CLIENT & RIMANDO", data);
    io.emit("CITY_CARD_EMIT", data);
  });

  socket.on("MAINDECK_CARD_BUTTON", (res1, res2, res3, deck1, deck2, deck3) => {
    // console.log("SERVER: MAIN DECK 1: ", res1);
    // console.log("SERVER: MAIN DECK 2: ", res2);
    // console.log("SERVER: MAIN DECK 3: ", res3);
    console.log("SERVER: MAIN DECK 1: ", deck1);
    console.log("SERVER: MAIN DECK 2: ", deck2);
    console.log("SERVER: MAIN DECK 3: ", deck3);

    io.emit("MAINDECK_CARD_BUTTON", res1, res2, res3, deck1, deck2, deck3);
  });

  socket.on("RE-SHUFFLE", (deck1, deck2, deck3) => {
    io.emit("RE-SHUFFLE", deck1, deck2, deck3);
  });
});

console.log("App is listening on port " + port);
