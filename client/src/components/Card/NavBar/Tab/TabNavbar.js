import React, { useState } from "react";

import WelcomeGame from "../../../WelcomeGame/WelcomeGame/WelcomeGame";
import { Link, Redirect } from "react-router-dom";
import { Nav, Navbar, Tab, Tabs } from "react-bootstrap";
import FillablePdf from '../../../FillablePdf/FillablePdf';
import Home from "../../../home";
import Cards from "../../CardMethods/CardDrawer";
import Rulebook from "../../../Rulespage/Rulespage";
import './NavCss.css'
import CreateGame from '../../../MainRoom/MainRoom'

function NavTab() {



  return (
    // <Tabs >
    //   <Tab
    //     eventKey="home"
    //     title={
    //       <Nav.Link as={Link} to="/">
    //         Home
    //       </Nav.Link>
    //     }
    //   ></Tab>
    //   <Tab eventKey="profile" title="PDF">
    //     <FillablePdf />
    //   </Tab>
    //   <Tab
    //     eventKey="Rulebook"
    //     title={
    //       <Nav.Link as={Link} to="/rulebook">
    //         Rulebook
    //       </Nav.Link>
    //     }
    //   ></Tab>
    //   <Tab
    //     eventKey="CreateGame"
    //     title={
    //       <Nav.Link as={Link} to="/creategame">
    //       Create a Game
    //       </Nav.Link>
    //     }
    //   >

    //  </Tab>
    //  </Tabs>
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        className="NavWelcome"
        bg="danger"
        variant="dark"
      >
        <Navbar.Brand href="#home">
          <Nav.Link as={Link} to="/">
            <WelcomeGame></WelcomeGame>
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link></Nav.Link>
           
            <Nav.Link as={Link} to={"/pdffilable"}>
             PDF
            </Nav.Link>
            <Nav.Link as={Link} to="/rulebook">
              Rulebook
            </Nav.Link>
            <Nav.Link as={Link} to="/creategame">
              Create a Game
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}







  
  


export default NavTab;
