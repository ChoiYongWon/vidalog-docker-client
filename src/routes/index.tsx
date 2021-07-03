
import {Switch, BrowserRouter as Router} from "react-router-dom";
import HomeRouter from "./home"
import AuthRouter from "./auth";
import React from "react";
import {Role} from "../types/Auth";


export const RouterIndex = () => {

  return (
      <Router>
        <Switch>
            <AuthRouter path={"/auth"} role={[Role.GUEST]}></AuthRouter>
            <HomeRouter path={"/"} role={[Role.USER]}></HomeRouter>
        </Switch>
      </Router>

  )
}