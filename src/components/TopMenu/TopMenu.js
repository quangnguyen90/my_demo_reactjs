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
import Context from "../Context/Context";
import ShowTrafficLight from "../TrafficLight/ShowTrafficLight";
import FuncSetState from "../SetState/FuncSetState";
import FuncUseState from "../UseState/FuncUseState";
import FuncUseContext from "../UseContext/FuncUseContext";

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
          <Route path="/traffic-light">
            <ShowTrafficLight />
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
          <Route path="/context">
            <Context />
          </Route>
          <Route path="/func-set-state">
            <FuncSetState />
          </Route>
          <Route path="/func-use-state">
            <FuncUseState />
          </Route>
          <Route path="/func-use-context">
            <FuncUseContext />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}