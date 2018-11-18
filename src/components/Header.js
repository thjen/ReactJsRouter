import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";

const menus = [
  {
    name: "Home",
    to: "/",
    exact: true,
  }, {
    name: "About",
    to: "/about",
    exact: false,
  }, {
    name: "Contact",
    to: "/contact",
    exact: false,
  }, {
    name: "Products",
    to: "/products",
    exact: false,
  }, {
    name: "Login",
    to: "/login",
    exact: false,
  }
]

const CustomLink = ({label, to, activeOnlyWhenExact}) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({match}) => {
        var active = match ? "active" : ""; // active is className
        return (
          <li className={active}>
            <NavLink to={to} className="my-link">{label}</NavLink>
          </li>
        );
      }}
    />
  );
}

class Header extends Component {

  showMenus = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <CustomLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact}/>
        );
      });
    }
    return result;
  }

  render() {
    return (
      <div className="Header">
        {/* Menu */}
        <nav className="navbar navbar-default" style={{borderRadius: "0"}}>
          <ul className="nav navbar-nav">
              {/*<li>
                <NavLink to="/" exact className="my-link" activeClassName="active">Home</NavLink>
                {/* <Link to="/">Home</Link> */}
                {/* <a href="/">Home</a> */}
              {/*</li>
              <li>
                <NavLink to="/about" className="my-link" activeClassName="active">About</NavLink>
                {/* <Link to="/about">About</Link> */}
                {/* <a href="/about">About</a> */}
              {/*</li>
              <li>
                <NavLink to="/contact" className="my-link" activeClassName="active">Contact</NavLink>
                {/* <Link to="/contact">Contact</Link> */}
                {/* <a href="/contact">Contact</a> */}
              {/*</li>*/}
            {this.showMenus(menus)}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
