import AuthForm from "../../components/Auth/AuthForm"
import AuthLayout from "../../layouts/Auth";
import React, {useEffect, useState} from "react";
import {Enum_AuthStatus, Enum_RegisterProgress} from "../../types/Auth";

const AuthContainer = () => {

    type emailStatusType = {
        availableEmail : boolean
        checking : boolean
        checked : boolean
    }


    const [id, setId] = useState("")
    const [pw, setPw] = useState("")
    const [loginBtnStatus, setLoginBtnStatus] = useState(false)
    const [status, setStatus] = useState<Enum_AuthStatus>(Enum_AuthStatus.Login)
    const [registerStatus, setRegisterStatus] = useState<Enum_RegisterProgress>(Enum_RegisterProgress.EMAIL)
    const [emailStatus, setEmailStatus] = useState<emailStatusType>({
        availableEmail : true,
        checking : false,
        checked : false
    })

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

    const onClickEmailSubmitBtn = (e : React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        if(!emailStatus.availableEmail) return
        if(!emailStatus.checking){
            setEmailStatus((prev : emailStatusType)=>{
                const state = {...emailStatus}
                state.checking = true
                return state
            })
            return
        }
        //임시 코드
        setRegisterStatus(Enum_RegisterProgress.ID)
        //이메일 인증번호 체킹
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
                          registerStatus={registerStatus}
                          emailStatus={emailStatus}
                          onClickEmailSubmitBtn={onClickEmailSubmitBtn}
                />

            </AuthLayout>


    )
}

export default AuthContainer