import React from "react";
import {Redirect, Route} from "react-router-dom";
import {role} from "../recoils/auth"
import {useRecoilValue} from "recoil";

type Props = {
    role : number[]
    path : string
}

  const HomeRouter = (props: Props) => {

      const myRole = useRecoilValue(role)

      return (
          <Route exact path={props.path} render={
              ()=>props.role.includes(myRole) ? <>HELLO MAIN</> : <Redirect to={"/auth"}/>
          }/>
      )
  }

  export default HomeRouter