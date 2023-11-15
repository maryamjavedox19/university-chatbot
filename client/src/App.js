import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/pages/Home";
import Navbar from "./components/inc/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export function App() {
  const [data, setData] = useState([{}]);


  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
