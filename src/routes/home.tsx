import React from "react";
import {Redirect, Route} from "react-router-dom";
import {role} from "../recoils/auth"
import {recoil_Auth} from "../recoils/index"
import {useRecoilValue} from "recoil";

type Props = {
    role : number[]
    path : string
}

  const HomeRouter = (props: Props) => {

      const myRole = useRecoilValue(role)
      const userId = useRecoilValue(recoil_Auth.id_id)

      return (
          <Route exact path={props.path} render={
              ()=>props.role.includes(myRole) ? <>안녕하세요 {userId}님!</> : <Redirect to={"/auth"}/>
          }/>
      )
  }

  export default HomeRouter