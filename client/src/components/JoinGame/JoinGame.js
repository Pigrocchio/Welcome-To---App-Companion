import React, { useState, useContext, useEffect } from "react";
import { Button, Form, Container } from "react-bootstrap";

import SocketContext from "../socket-contex";
import './JoinGame.css'


function JoinWindow(props) {
    
    const [name, setName] = useState("");
    const [gameId, setGameId] = useState("");
    const [message, setMessage] = useState("");


    const socket = useContext(SocketContext);


 const onNameSubmit = (data) => {
   // console.log("data submitted", data)
   socket.emit("PLAYER_JOIN_GAME", data);
 };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onNameSubmit({ name: name, gameId: gameId });
    };

  useEffect(() => {
    socket.on("playerJoinedRoom", (data) => {
        console.log("CLIENT: playerJoinedRoom", data);   
        setMessage(data.message)  
        
    })
      
      
      socket.on('error', message => {
           setMessage(message); 
     })   
  }, []);


    return (
      <>
        <Container className="form-contain">
          <div className="form">
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Enter Name"
                />
              </Form.Group>

              <Form.Group controlId="formBasicId">
                <Form.Label>Game Id</Form.Label>
                <Form.Control
                  value={gameId}
                  onChange={(e) => setGameId(e.target.value)}
                  type="text"
                  placeholder="Game Id"
                />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Start
              </Button>
            </Form>
            <p>{message}</p>
          </div>
        </Container>
      </>
    );
}


export default JoinWindow