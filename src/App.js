import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link,Switch, Redirect } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'

import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";

function App() {
  return (
    <Router>
      <div className="App">      

        <Switch>
          <PrivateRoute exact path="/BubblePage" component={BubblePage} />
          
          <Redirect exact from="/bubbles/reload" to="/BubblePage" />
          <Route exact path="/" component={Login} />
          <Route component={Login} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute