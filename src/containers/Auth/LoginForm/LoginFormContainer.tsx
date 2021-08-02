import React, {useEffect, useState} from "react"

import {auth_status, login_btnStatus, login_id, login_pw} from "../../../recoils/auth";
import LoginForm from "../../../components/Auth/LoginForm";
import {useRecoilState, useSetRecoilState} from "recoil";
import {Auth, Enum_AuthStatus, Role} from "../../../types/Auth";
import {AuthAPI} from "../../../api/AuthAPI";
import {useHistory} from "react-router-dom"
import {recoil_Auth} from "../../../recoils";


const LoginFormContainer = () => {
    const [id, setId] = useRecoilState(login_id)
    const [pw, setPw] = useRecoilState(login_pw)
    const [loginBtnStatus, setLoginBtnStatus] = useRecoilState(login_btnStatus)
    const setAuthStatus = useSetRecoilState(auth_status)
    const setAuthentication = useSetRecoilState(recoil_Auth.authenticate)
    const setRole = useSetRecoilState(recoil_Auth.role)
    const history = useHistory()
    const [errorObj, setErrorObj] = useState({
        error : false,
        msg : ""
    })

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
        AuthAPI.login(id, pw).then((res)=>{
            setAuthentication(Auth.LOGIN)
            setRole(Role.USER)
            localStorage.setItem("VAT",res.access_token)
            localStorage.setItem("VRT",res.refresh_token)
            history.push("/")
        }).catch(()=>{
            setErrorObj({
                error : true,
                msg : "아이디 또는 비밀번호가 틀립니다."
            })
            setId(""); setPw(""); setLoginBtnStatus(false);
        })

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
        error={errorObj.error}
        errorMsg={errorObj.msg}
        loginBtnStatus={loginBtnStatus}
        onChangeId={onChangeId}
        onChangePw={onChangePw}
        onClickLoginBtn={onClickLoginBtn}
        onClickFindBtn={onClickFindBtn}
        onClickRegisterBtn={onClickRegisterBtn}
    />

}

export default LoginFormContainer