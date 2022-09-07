import React from 'react';
import './App.css';
//import * as ReactBootStrap from "react-bootstrap";
import DankMemes from "./Components/DankMemes.component";
import Features from "./Components/Features.component";
import Pricing from "./Components/Pricing.component";
import MoreDeets from "./Components/MoreDeets.component";
import NavBar from "./Components/Navbar.component"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Router>
        <NavBar />
 

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/features" component={Features}>
              <Features />
          </Route>
          <Route path="/pricing" component={Pricing}>
            <Pricing />
          </Route>
          <Route path="/deets" component={MoreDeets}>
            <MoreDeets />
          </Route>
          <Route path="/dankmemes" component={DankMemes}>
            <DankMemes />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
