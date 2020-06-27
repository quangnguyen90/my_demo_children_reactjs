import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import About from "../Common/About";
import Topics from "../Topic/Topics";
import Home from "../Home/Home";

import Product from "../Products/Product";
import NavBar from "../NavBar/NavBar";
import Hoc from "../AwsomeImg/Hoc";
import NotHoc from "../AwsomeImg/NotHoc";
import RenderProps from "../RenderProps/RenderProps";

export default function TopMenu() {
  return (
    <Router>
      <div className="menu">
        <NavBar />
        <Switch>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/hoc">
            <Hoc />
          </Route>
          <Route path="/normal">
            <NotHoc />
          </Route>
          <Route path="/render-props">
            <RenderProps />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}