import React from "react";

import WelcomeGame from "../../../WelcomeGame/WelcomeGame/WelcomeGame";
import { Link } from "react-router-dom";
import { Nav, Tab, Tabs } from "react-bootstrap";
import FillablePdf from "../../../FillablePdf/FillablePdf";
import Home from "../../../home";
import Cards from "../../CardMethods/CardDrawer";
import Rulebook from "../../../Rulespage/Rulespage";
import './NavCss.css'


function navTab() {
  return (
    <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
      <Tab eventKey="home" title={<WelcomeGame></WelcomeGame>}>
        <Home></Home>
      </Tab>
      <Tab eventKey="card" title="Card Drawer">
        <Cards></Cards>
      </Tab>
      <Tab eventKey="rulebook" title="Rules">
        <Rulebook></Rulebook>
      </Tab>
      <Tab eventKey="PDF" title="PDF Sheet">
        <FillablePdf></FillablePdf>
      </Tab>
    </Tabs>
  );
}

export default navTab;
