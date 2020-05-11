function playerJoinGame(io, data, ok) {
      
    // Look up the room ID in the Socket.IO manager object.
    let room = io.sockets.adapter.rooms[data.gameId];
    console.log(room);
    console.log("list of all rooms", io.sockets.adapter.rooms);
     console.log(ok);

    if( room != undefined ){
    // attach the socket id to the data object.
    data.mySocketId = ok;

    // Join the room
        io.on.socket.join('cicco')
            console.log("list of all rooms", io.sockets.adapter.rooms);


   
    
   

} else {
    // Otherwise, send an error message back to the player.
console.log('error')}    


 }

 
module.exports = { playerJoinGame };