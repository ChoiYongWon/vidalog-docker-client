import React, {useEffect} from "react"

import {
    login_id,
    login_pw,
    login_btnStatus,
    auth_status
} from "../../../recoils/auth";
import LoginForm from "../../../components/Auth/LoginForm";
import {useRecoilState,useSetRecoilState} from "recoil";
import {Enum_AuthStatus} from "../../../types/Auth";


const LoginFormContainer = () => {
    const [id, setId] = useRecoilState(login_id)
    const [pw, setPw] = useRecoilState(login_pw)
    const [loginBtnStatus, setLoginBtnStatus] = useRecoilState(login_btnStatus)
    const setAuthStatus = useSetRecoilState(auth_status)


    useEffect(()=>{
        if(id.length !== 0 && pw.length !== 0) setLoginBtnStatus(true)
        else setLoginBtnStatus(false)
    }, [id, pw, setLoginBtnStatus])

    const onChangeId = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setId(e.target.value)
    }

    const onChangePw = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPw(e.target.value)
    }

    const onClickLoginBtn = (e : React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        if(!loginBtnStatus) return
        setId(""); setPw(""); setLoginBtnStatus(false);
    }

    const onClickFindBtn = () => {
        setAuthStatus(Enum_AuthStatus.Find)
    }

    const onClickRegisterBtn = () => {
        setAuthStatus(Enum_AuthStatus.Register)
    }

    return <LoginForm
        id={id}
        pw={pw}
        loginBtnStatus={loginBtnStatus}
        onChangeId={onChangeId}
        onChangePw={onChangePw}
        onClickLoginBtn={onClickLoginBtn}
        onClickFindBtn={onClickFindBtn}
        onClickRegisterBtn={onClickRegisterBtn}
    />

}

export default LoginFormContainer