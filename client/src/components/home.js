import React, { Component } from "react";
import SocketContext from "./socket-contex";
import { Container, Carousel, Row, Col, Image } from "react-bootstrap";
import ImageSlider1 from './Card/CardImage/welcometoslider.jpg'
import BoxArtwork from './Card/CardImage/pic3761012.jpg'
import ImageHome from './Card/CardImage/board.png'




class List extends Component {
  static contextType = SocketContext;
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  // Fetch the list on first mount
  componentDidMount() {
    console.log(this.context);
    const socket = this.context;

    socket.on("connect", function () {
      console.log("Connected!");
    });
  }

  getList = async () => {};

  render() {

    return (
      <>
        <div className="jumbotron text-white jumbotron-image shadow imageg">
          <Container className="container-fluid">
            <h2>About Welcome To... Companion App </h2>
            <Row>
              <Col lg={8}>
                <div>
                  <p>
                    The idea of this very simple app was born, on the one hand,
                    from the desire to learn how to program, on the other from a
                    real need. Stuck at home by the pandemic, one Sunday we were
                    playing Welcome To...via Skype with some friends.
                    <p>
                      To share the common deck, however, we were forced to keep
                      a camera fixed on the table, complicating the life of
                      those who were managing the game from a distance.{" "}
                    </p>
                  </p>
                </div>
              </Col>
              <Col lg={4}>
                <div>
                  <Image className="ombra" src={BoxArtwork} fluid />
                </div>
              </Col>
            </Row>
            <Row>
              
                
              

              <Col lg={12}>
                <p>
                  So the following days I wanted to try to take in hand some
                  concepts of React, Socket.io, etc, and try to make our life
                  easier during the next games. It's a very raw version (cover
                  only the basic game principles), which still lacks a lot of
                  things (code refactoring, private game sessions) and other
                  small things.
                </p>
                <a href="https://oxeyemedia.com/products/pre-order-welcome-to">
                  Please support Welcome To... and its author
                </a>
              </Col>
              <Col lg={12}>
                <Image src={ImageHome} fluid />
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

// const ListComponentWhitSocket = (props) => (
//   <SocketContext.Consumer>
//     {(socket) => <List {...props} socket={socket} />}
//   </SocketContext.Consumer>
// );

export default List;
