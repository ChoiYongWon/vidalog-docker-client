import AuthForm from "../../components/Auth/AuthForm"
import AuthLayout from "../../layouts/Auth";
import React, {useEffect, useState} from "react";
import {Enum_AuthStatus, Enum_RegisterProgress} from "../../types/Auth";

const AuthContainer = () => {


    const [id, setId] = useState("")
    const [pw, setPw] = useState("")
    const [loginBtnStatus, setLoginBtnStatus] = useState(false)
    const [status, setStatus] = useState<Enum_AuthStatus>(Enum_AuthStatus.Login)
    // const [registerStatus, setRegisterStatus] = useState<Enum_RegisterProgress>(Enum_RegisterProgress.EMAIL)

    useEffect(()=>{
        if(id !== "" && pw !== "") setLoginBtnStatus(true)
        else setLoginBtnStatus(false)
    }, [id, pw])

    const onChangeId = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setId(e.target.value)
    }

    const onChangePw = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPw(e.target.value)
    }

    const onClickLoginBtn = (e : React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        if(loginBtnStatus) console.log(id, pw)
    }

    const onClickFindBtn = () => {
        setStatus(Enum_AuthStatus.Find)
    }

    const onClickRegisterBtn = () => {
        setStatus(Enum_AuthStatus.Register)
    }

    return (

            <AuthLayout>
                <AuthForm onChangeId={onChangeId}
                          onChangePw={onChangePw}
                          status={status}
                          loginBtnStatus={loginBtnStatus}
                          setLoginBtnStatus={setLoginBtnStatus}
                          onClickLoginBtn={onClickLoginBtn}
                          onClickFindBtn={onClickFindBtn}
                          onClickRegisterBtn={onClickRegisterBtn}
                          registerStatus={Enum_RegisterProgress.EMAIL}
                />

            </AuthLayout>


    )
}

export default AuthContainer