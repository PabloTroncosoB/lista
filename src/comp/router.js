import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import App from "../App"
import Home from "./home"
import Me from "./me"
import Nf from "./nf"

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/me" component={Me} />
      <Route exact path="/lista/:id" component={App} />
      <Route component={Nf} />
    </Switch>
  </BrowserRouter>
)

export default Router;
