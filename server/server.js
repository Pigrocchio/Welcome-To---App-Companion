const express = require("express");
const path = require("path");
const socketIo = require("socket.io");
const port = process.env.PORT || 5000;
const GameFunction = require("./GameFunctions/GameFunctions");

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "build")));

app.use("/api", require("./routes/card.routes"));


app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
let server = app.listen(port);

let io = socketIo(server);
let players = [];

io.on("connection", (socket) => {
  let sockID = socket.id;
  console.log("socket connected ", socket.id);
  players.push(socket.id);
  console.log(players);

  socket.on("disconnect", function () {
    console.log("A user disconnected: " + socket.id);
    players = players.filter((player) => player !== socket.id);
  });

  


 // CITY PLAN CARD DRAFT
  socket.on("CITY_PLAN_BUTTON", (data, roomId) => {
    // console.log("SERVER : DATI DAL CLIENT & RIMANDO", data);
    if (io.sockets.adapter.rooms[roomId]) {
      console.log('esiste')
    } else {
      console.log('non esiste')
    }

      io.sockets.in(roomId).emit("CITY_CARD_EMIT", data);
   
  });



  // CARD MAIN DECK DRAFT
  socket.on(
    "MAINDECK_CARD_BUTTON",
    (res1, res2, res3, deck1, deck2, deck3, Gameid) => {
      // console.log("SERVER: MAIN DECK 1: ", deck1);
      // console.log("SERVER: MAIN DECK 2: ", deck2);
      // console.log("SERVER: MAIN DECK 3: ", deck3);
io.sockets
  .in(Gameid)
  .emit("MAINDECK_CARD_BUTTON", res1, res2, res3, deck1, deck2, deck3);
    }
  );

  // CARD MAIN DECK RE-SHUFFLE
  socket.on("RE-SHUFFLE", (deck1, deck2, deck3, Gameid) => {

    io.sockets.in(Gameid).emit("RE-SHUFFLE", deck1, deck2, deck3);
  });


  // START GAME
  socket.on("START_GAME_HOST", (gameId) => {
    console.log("ST GM", gameId);
    io.sockets.in(gameId.gameId).emit("START_NEW_GAME", gameId);

  });


  // CREATE GAME IN MAIN ROOM 
  socket.on("MAIN_ROOM_CREATE_GAME", () => {
    console.log("Create game :");

    // Create a unique Socket.IO Room
    var thisGameId = (Math.random() * 100000) | 0;

    // Return the Room ID (gameId) and the socket ID (mySocketId) to the browser client
    io.emit("NEW_GAME_CREATED", { gameId: thisGameId, mySocketId: socket.id });
    socket.join(thisGameId);
    console.log("list", io.sockets.adapter.rooms);
  });




  // JOIN GAME BUTTON
  socket.on("PLAYER_JOIN_GAME", (data) => {
    // Look up the room ID in the Socket.IO manager object.
    let room = io.sockets.adapter.rooms[data.gameId];
  

    if (room != undefined) {
      // attach the socket id to the data object.
      data.mySocketId = sockID;
 let message = `Joined room number ${data.gameId}, please wait until Host start the game`;
 data.message = message;
      // Join the room
      socket.join(data.gameId);
      console.log("list of all rooms", io.sockets.adapter.rooms);

      // Emit an event notifying the clients that the player has joined the room.
      io.sockets.in(data.gameId).emit('playerJoinedRoom', data);

    } else {
      let message = "This room does not exist."
             // Otherwise, send an error message back to the player.
      io.emit("error", message);
      console.log(message)
           }
  });
});

console.log("App is listening on port " + port);
