import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          {/* Content */}
          <Switch>
            <Route path="/"
              exact
              component={Home}
            />
            <Route path="/about"
              component={About}
            />
            <Route path="/contact"
              component={Contact}
            />
            <Route path="/products"
              component={Products}
            />
            <Route path="/login"
              component={Login}
            />
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
