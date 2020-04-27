import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

//Method
import drawCard from "./DrawCard";
import "../../../App.css";
import { launchDeckNew, deck1, deck2, deck3 } from "./DeckBuilder";

//Component
import BackCard from "../BackCard";
import Deck from "../Deck";
import ButtonComponent from "./Button";
import CollapseButton from "../../CollpaseButton/CollapseButton";
import PDF from "../CardImage/Welcome_To_Fillable_Sheet_PDF_v2.0.pdf";
import SocketContext from "../../socket-contex";
import CityPlanCard from "../CityPlanCard/CityPlanCard";
import EmptyCard from "../CardImage/WelcomeToCardEmptyBack.jpg"


function CardDrawer() {
  //Deck1
  const [cardDraw, setcardDraw] = useState([]); // container for the  drwed back of the card
  const [deckOne, setDeck] = useState([]); // remaining drawed card of the total deck

  //Deck2
  const [cardDrawTwo, setcardDrawTwo] = useState([]);
  const [deckTwo, setDeckTwo] = useState([]);

  //Deck3
  const [cardDrawThree, setcardDrawThree] = useState([]);
  const [deckThree, setDeckThree] = useState([]);

  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.on(
      "MAINDECK_CARD_BUTTON",
      (res1, res2, res3, deck1, deck2, deck3) => {
        console.log("CLIENT: DATI ARRIVO SERVER 1", deck1);
        // console.log("CLIENT: DATI ARRIVO SERVER 2", deck2);
        // console.log("CLIENT: DATI ARRIVO SERVER 3", deck3);
        // set the back of the card
        setcardDraw(res1);
        setcardDrawTwo(res2);
        setcardDrawThree(res3);

        // set the total deck remainig
        setDeck(deck1);
        setDeckTwo(deck2);
        setDeckThree(deck3);
      }
    );

    socket.on("RE-SHUFFLE", (deck1, deck2, deck3) => {
      launchDeckNew();
      setDeck(deck1);
      setDeckTwo(deck2);
      setDeckThree(deck3);
      setcardDraw([]);
      setcardDrawTwo([]);
      setcardDrawThree([]);
    });
  }, [socket]);

//Draw one card form stater deck
  let handleCardDraw = () => {
    let res1 = drawCard(deck1, 27);
    let res2 = drawCard(deck2, 27);
    let res3 = drawCard(deck3, 27);

    socket.emit("MAINDECK_CARD_BUTTON", res1, res2, res3, deck1, deck2, deck3);
  };

  // Re-Shuffle a initial starter deck

  let reShuffleDeck = () => {
    

    socket.emit("RE-SHUFFLE", deck1, deck2, deck3);


  };

  return (
    <>
      <Container>
        <div className="button-row">
          <div></div>
          <div>
            {deck1.length > 0 ? (
              <ButtonComponent
                variant="primary"
                text="Draw a card"
                action={handleCardDraw}
              />
            ) : (
              <ButtonComponent
                variant="warning"
                text="Click to re-shuffle"
                action={reShuffleDeck}
              />
            )}
          </div>
        </div>

        <Row>
          <Col md="6" lg="4">
            <Row>
              <Col>
                <Deck deck={deckOne}></Deck>
              </Col>

              <Col>
                {!cardDraw[0] ? (
                  <img
                    src={EmptyCard}
                    alt="empty-card"
                    className="empty-card "
                  ></img>
                ) : (
                  <>
                    <BackCard card={cardDraw[0]}></BackCard>
                  </>
                )}
              </Col>
            </Row>
          </Col>

          <Col md="6" lg="4">
            <Row>
              <Col>
                <Deck deck={deckTwo}></Deck>
              </Col>

              <Col>
                {!cardDrawTwo[0] ? (
                  <img
                    src={EmptyCard}
                    alt="empty-card"
                    className="empty-card "
                  ></img>
                ) : (
                  <>
                    <BackCard card={cardDrawTwo[0]}></BackCard>
                  </>
                )}
              </Col>
            </Row>
          </Col>

          <Col md="6" lg="4">
            <Row>
              <Col>
                <Deck deck={deckThree}></Deck>
              </Col>

              <Col>
                {!cardDrawThree[0] ? (
                  <img
                    src={EmptyCard}
                    alt="empty-card"
                    className="empty-card "
                  ></img>
                ) : (
                  <>
                    <BackCard card={cardDrawThree[0]}></BackCard>
                  </>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <CityPlanCard></CityPlanCard>
      
      <div className="button-row">
        <CollapseButton
          variant="primary"
          namebutton="Welcome To... Fillable PDF"
          contenuto={
            <>
              <div className="fillable-pdf">
                <div id="example-collapse-text">
                  Based on Dobey's Welcome To Fillable Player Sheet PDF, I added
                  in fences, pools, and estate markers (lines at the back of
                  houses to mark when you used an estate for a City Plan).
                </div>
                <embed
                  src={`${PDF}#zoom=80&scrollbar=0&toolbar=0&navpanes=0`}
                ></embed>
              </div>
            </>
          }
        ></CollapseButton>
      </div>
    </>
  );
}

export default CardDrawer;
