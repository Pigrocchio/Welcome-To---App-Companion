import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import SocketContext from './components/socket-contex'
import * as io from "socket.io-client";



//Component

import JoinGame from './components/JoinGame/JoinGame'
import Navbar from "./components/Card/NavBar/Tab/TabNavbar";
import CardDrawer from "./components/Card/CardMethods/CardDrawer";
import RulesPage from "./components/Rulespage/Rulespage";
import CityPlanCardPage from './components/Card/CityPlanCard/CityPlanCard'
import Home from './components/home'
import FillablePdf from "./components/FillablePdf/FillablePdf"
import MainRoom from './components/MainRoom/MainRoom'
import NotFoundPage  from './components/NotFoundPage'

const socket = io(process.env.PORT); // same as io.connect() || , {transports: ['websocket']}
function App() {
              

                 return (
                   <>
                     <SocketContext.Provider value={socket}>
                       <BrowserRouter>
                         <Navbar />

                         <Switch>
                           <Route path="/carddrawer" component={CardDrawer} />
                           <Route
                             path="/cityplan"
                             component={CityPlanCardPage}
                           />
                           <Route path="/rulebook" component={RulesPage} />
                           <Route exact path="/" component={Home} />
                           <Route
                             exact path="/pdffilable"
                             component={FillablePdf}
                           />
                           <Route path="/joingame" component={JoinGame} />
                           <Route path="/creategame" component={MainRoom} />
                           <Route component={NotFoundPage} />
                         </Switch>
                       </BrowserRouter>
                     </SocketContext.Provider>
                   </>
                 );
               }

export default App;


