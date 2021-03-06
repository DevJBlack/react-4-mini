import React, { Component } from "react";
import Nav from "./Components/Nav/Nav";
import "./App.css";
import routes from './routes'
import { HashRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
       <Router>
          <div className="App">
            <Nav />
            {routes}
          </div>
       </Router>  
    );
  }
}

export default App;
