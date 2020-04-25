
import React from "react";

import WelcomeGame from "../../../WelcomeGame/WelcomeGame/WelcomeGame";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";


function navTab() {
  return (
    // <>

    //     <Tabs defaultActiveKey="home" id="tab-example">
    //       <Tab eventKey="home" title={<Link to="/list"><WelcomeGame></WelcomeGame></Link>} ></Tab>

    //       <Tab
    //         eventKey="profile"
    //         title={<Link to="/fillable">PDFCardDrawer</Link>}
    //       >
    //         <CollapseButton
    //           namebutton="Expand"
    //           contenuto={
    //             <>
    //               <div className="fillable-pdf">
    //                 <embed
    //                   src={`${PDF}#zoom=80&scrollbar=0&toolbar=0&navpanes=0`}
    //                 ></embed>
    //               </div>
    //             </>
    //           }
    //         ></CollapseButton>

    //       </Tab>

    //       <Tab eventKey="rulebook" title={<Link to="/rulebook">Rule</Link>}>
    //         <RulesPage></RulesPage>
    //       </Tab>

    //       <Tab
    //         eventKey="City Plan"
    //         title={<Link to="/cityplan">CityPlan Card</Link>}
    //       ></Tab>

    //       <Tab eventKey="contact" title="Contact" disabled></Tab>
    //     </Tabs>

    // </>

    <Nav variant="tabs" defaultActiveKey="/list">
      <Nav.Item>
        <Link to="/list">
          <WelcomeGame></WelcomeGame>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/fillable" eventkey="fillable">
          Card Drawer & Fillable Sheet 
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/rulebook" eventkey="disabled" disabled>
          Rulebook
        </Link>
      </Nav.Item>
      {/* <Nav.Item>
        <Link to="/cityplan" eventkey="disabled" disabled>
          City Plan Card
        </Link>
      </Nav.Item> */}
    </Nav>
  );
}

export default navTab;
