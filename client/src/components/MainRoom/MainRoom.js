import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom"

import { Container, Button, Card } from "react-bootstrap";
import SocketContext from "../socket-contex";


// IMAGES
import ImageCreateGame from '../Card/CardImage/pic5177842.jpg'
import ImageJoinGame from "../Card/CardImage/1_omZ8d6IrFlpzEaa2ihKniQ@2x.jpeg";


// CSS
import "./MainRoom.css";

let MainRoom = () => {
  const history = useHistory();

  const socket = useContext(SocketContext);

  const [gameId, setGameId] = useState([]); // create game function
  const [joinedPlayer, setjoinedPlayer] = useState([]);
  const [newGame, setnewGame] = useState(false);
  const [role, setRole] = useState("");
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    socket.on("NEW_GAME_CREATED", (data) => {
      console.log("CLIENT: DATI ARRIVO SERVER", data);
      setGameId((gameId) => data);
      setnewGameHandler(true);
      setRole("Host");
    });

    socket.on("playerJoinedRoom", (data) => {
      console.log("CLIENT: playerJoinedRoom", data);
      setjoinedPlayer(data);

      setPlayers((prev) => [...prev, data.name]);
    });

    socket.on("START_NEW_GAME", (data) => {
      history.push(`/carddrawer/${data.gameId}`);
      console.log("ON GAME STATER", data);
    });
  }, []);

  function setnewGameHandler(x) {
    setnewGame(x);
  }

  function handleJoinGame() {
    socket.emit("MAIN_ROOM_CREATE_GAME");
  }

  function handleStartGame() {
    socket.emit("START_GAME_HOST", gameId);
    console.log("start");
  }

  return (
    <>
      {!newGame === true ? (
        <Container>
          <Card>
            <Card.Img variant="top" src={ImageCreateGame} />
            <Card.Body>
              <Card.Text>
                Create a game and play with friends with a gameId
              </Card.Text>
              <Button variant="primary" onClick={handleJoinGame}>
                Create a Game
              </Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={ImageJoinGame} />
            <Card.Body>
              <Card.Text>
                Join a game session with a game id and play with friends
              </Card.Text>
              <Button
                variant="success"
                onClick={() => history.push("/joingame")}
              >
                Join a Game
              </Button>
            </Card.Body>
          </Card>
        </Container>
      ) : (
        <>
          <Container className="form-contain">
            <div className='form'>
              <h2>New Game created {gameId.gameId} </h2>
              
                <li>Share the Gameid code whit the other players</li>

                <li>
                  Wait until all player as joined the game, than press START
                </li>
              

              <p>Player Joined:</p>

              {players.map((data, idx) => (
                <li key={idx}>{data}</li>
              ))}
              <Button variant="primary" onClick={handleStartGame}>
                Start the Game
              </Button>
            </div>
          </Container>
        </>
      )}
    </>
  );
};

export default MainRoom;
