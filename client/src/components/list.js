import React, { Component } from "react";
import SocketContext from "./socket-contex";
import { Container, Carousel } from "react-bootstrap";
import ImageSlider1 from './Card/CardImage/welcometoslider.jpg'

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
            <p className="bg-gradient ">
              Welcome To... plays like a roll-and-write dice game in which you
              mark results on a score-sheet...but without dice. Instead you flip
              cards from three piles to make three different action sets with
              both a house number and a corresponding action from which everyone
              chooses one. You use the number to fill in a house on your street
              in numerical order. Then you take the action to increase the point
              value of estates you build or score points at the end for building
              parks and pools. Players also have the option of taking actions to
              alter or duplicate their house numbers. And everyone is racing to
              be the first to complete public goals. There's lots to do and many
              paths to becoming the best suburban architect in Welcome To...!
            </p>
            <a
              href="https://bootstrapious.com/snippets"
              class="btn btn-primary"
            >
              More on Welcome To Game
            </a>
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
