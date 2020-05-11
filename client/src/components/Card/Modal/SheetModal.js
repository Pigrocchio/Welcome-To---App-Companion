import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";



function ModalWindow(props) {

  const [name, setName] = useState("");
    const [gameId, setGameId] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
   props.onNameSubmit({ name: name, gameId:gameId });
  };


  return (
    <>
      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title>Join Game</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
              Start a game
            </Button>
          </Form>
        </Modal.Body>
        {props.player.name && (
          <p>
            {props.player.name} as joined the game {props.player.gameId}
          </p>
        )}

        {props.errorMessage && <p>{props.errorMessage}</p>}
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalWindow;