import React from "react";
import { Route, Redirect} from "react-router-dom";
import Auth from "../pages/Auth";
import {useRecoilValue} from "recoil";
import {role} from "../recoils/auth"

interface Props {
    role : number[]
    path : string
}

const AuthRouter = (props: Props) => {

    const myRole = useRecoilValue(role)



    return (
        <Route path={props.path} render={
            ()=>props.role.includes(myRole) ? <Auth/> : <Redirect to={"/"}/>
        }/>
    )
}

export default AuthRouter