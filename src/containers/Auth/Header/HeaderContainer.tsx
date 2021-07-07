import React from "react"
import {useSetRecoilState} from "recoil";
import {recoil_Auth} from "../../../recoils";
import {Enum_AuthStatus} from "../../../types/Auth";
import Header from "../../../components/Auth/Header";

const HeaderContainer = () => {

    const setAuthStatus = useSetRecoilState(recoil_Auth.auth_status)

    const onClick = () => {
        setAuthStatus(Enum_AuthStatus.Login)
    }

    return (
        <Header onClick={onClick}/>
    )
}

export default HeaderContainer