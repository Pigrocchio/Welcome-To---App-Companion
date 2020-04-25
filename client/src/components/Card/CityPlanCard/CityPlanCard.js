import React, { useState, useEffect, useContext } from "react";
import Card from "react-bootstrap/Card";
import { Row, Col, Container } from "react-bootstrap";
import SocketContext from "../../socket-contex";
import ButtonComponent from "../CardMethods/Button";

export default function CityPlanCardPage() {
  const [CityPlanCardList, setCityPlanCardList] = useState([]);
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.on("CITY_CARD_EMIT", (data) => {
      console.log("CLIENT: DATI ARRIVO SERVER");
      setCityPlanCardList([...data]);
    });
  }, [socket]);

  // Retrieves the list of items from the Express app
  const getList = async () => {
    try {
      const res = await fetch("/api/getcard");
      const data = await res.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  let handleCardDraw = () => {
    getList()
      .then((data) => {
        socket.emit("CITY_PLAN_BUTTON", data);
        return data;
      })
      .then((data) => setCityPlanCardList([...data]))
      .catch((e) => console.log(e));
  };

  return (
    <Container>
      <ButtonComponent
        variant="primary"
        text="Draw City Card Card"
        action={handleCardDraw}
      />
      <Row>
        {CityPlanCardList.map((x, index) => {
          return (
            <Col key={index}>
              <Card
                style={{
                  width: "10rem",
                  height: "auto",
                  color: "rgb(189, 34, 48)",
                }}
              >
                <Card.Img
                  variant="top"
                  src={require(`./citycardplanimage/${x.imageUrl}`)}
                />
                <Card.Body>
                  <Card.Title style={{ "fontSize": "14px" }}>
                    City Plan Objective n.{index + 1}
                  </Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
