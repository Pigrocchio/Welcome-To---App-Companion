import React from "react";

import WelcomeGame from "../../../WelcomeGame/WelcomeGame/WelcomeGame";
import { Link } from "react-router-dom";
import { Nav, Tab, Tabs } from "react-bootstrap";
import FillablePdf from "../../../FillablePdf/FillablePdf";
import Home from "../../../home";
import Cards from "../../CardMethods/CardDrawer";


function navTab() {


 

  return (
    // <Nav variant="tabs" defaultActiveKey="/home">
    //   <Nav.Item>
    //     <Link to="/home">
    //       <WelcomeGame></WelcomeGame>
    //     </Link>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <Link to="/carddrawer" eventkey="fillable">
    //       Card Drawer & City Plan Card
    //     </Link>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <Link to="/rulebook" eventkey="disabled" disabled>
    //       Rulebook
    //     </Link>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <Link to="/pdffilable" eventkey="disabled" disabled>
    //       PDF Fillable
    //     </Link>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
    //       <Tab eventKey="home" title="Home">

    //       </Tab>
    //     </Tabs>
    //   </Nav.Item>
    // </Nav>

    <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
      <Tab
        eventKey="home"
        title={
          <Link to="/home">
            <WelcomeGame></WelcomeGame>
          </Link>
        }
      ></Tab>
      <Tab
        eventKey="card"
        title={
          <Link to="/carddrawer" eventkey="disabled" disabled>
            Card & Objective
          </Link>
        }
      ></Tab>
      <Tab
        eventKey="rulebook"
        title={
          <Link
          
            to="/rulebook" eventkey="disabled" disabled>
            Rulebook
          </Link>
        }
      ></Tab>
      <Tab
        eventKey="contact"
        title={
          <Link to="/blank" eventkey="disabled" disabled>
            PDF
          </Link>
        }
      >
        <FillablePdf></FillablePdf>
      </Tab>
    </Tabs>
  );
}

export default navTab;
