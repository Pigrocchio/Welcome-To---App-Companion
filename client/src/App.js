import React from 'react';
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import SocketContext from './components/socket-contex'
import * as io from "socket.io-client";




//Component

import Navbar from "./components/Card/NavBar/Tab/TabNavbar";
import CardDrawer from "./components/Card/CardMethods/CardDrawer";
import RulesPage from "./components/Rulespage/Rulespage";
import CityPlanCardPage from './components/Card/CityPlanCard/CityPlanCard'
import Home from './components/home'
import FillablePdf from "./components/FillablePdf/FillablePdf"
 

const socket = io(process.env.PORT); // same as io.connect() || , {transports: ['websocket']}
function App() {
                 //     `
                 // „¨°º¤ø„¸¸„ø¤º°¨¸„ø¤º
                 // ¨°º¤ø„¸DAFT¸„ø¤º°¨
                 // „ø¤º°¨ PUNK¨°º¤ø
                 // ¸„ø¤º°¨¸„ø¤ºº¤ø„¸¨°º¤

                 // `

                 return (
                   <>
                     <SocketContext.Provider value={socket}>
                       <BrowserRouter>
                         <Navbar />

                         <Switch>
                           <Route exact path="/" component={Home} />
                           <Route path="/carddrawer" component={CardDrawer} />
                           <Route
                             path="/cityplan"
                             component={CityPlanCardPage}
                           />
                           <Route path="/rulebook" component={RulesPage} />
                           <Route path="/home" component={Home} />
                           <Route path="/pdffilable" component={FillablePdf} />
                           <Route path="/blank" />
                         </Switch>
                       </BrowserRouter>
                     </SocketContext.Provider>
                   </>
                 );
               }

export default App;


