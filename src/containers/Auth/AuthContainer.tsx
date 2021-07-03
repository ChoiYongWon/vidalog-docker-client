import AuthForm from "../../components/Auth/AuthForm"
import AuthLayout from "../../layouts/Auth";
import React, {useEffect, useState} from "react";

const AuthContainer = () => {

    enum Status {
        Login,
        Register,
        Find
    }


    const [id, setId] = useState("")
    const [pw, setPw] = useState("")
    const [loginBtnStatus, setLoginBtnStatus] = useState(false)
    const [status, setStatus] = useState(Status.Login)

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
        setStatus(Status.Find)
    }

    const onClickRegisterBtn = () => {
        setStatus(Status.Register)
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
                          onClickRegisterBtn={onClickRegisterBtn}/>

            </AuthLayout>


    )
}

export default AuthContainer