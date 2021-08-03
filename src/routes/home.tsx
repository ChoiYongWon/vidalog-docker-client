import React from "react";
import {Redirect, Route} from "react-router-dom";
import {recoil_User} from "../recoils/index"
import {useRecoilValue} from "recoil";

type Props = {
    role : number[]
    path : string
}

  const HomeRouter = (props: Props) => {

      const {role, id} = useRecoilValue(recoil_User.user)

      return (
          <Route exact path={props.path} render={
              ()=>props.role.includes(role) ? <>안녕하세요 {id}님!</> : <Redirect to={"/auth"}/>
          }/>
      )
  }

  export default HomeRouter