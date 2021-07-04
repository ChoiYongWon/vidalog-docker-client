import React from "react"
import LoginForm from "../LoginForm";
import RegisterProgress from "../RegisterProgress";
import {Enum_AuthStatus} from "../../../types/Auth";
import RegisterForm from "../RegisterForm";

type Props = {
    status : number
    loginBtnStatus : boolean
    onChangeId : (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    onChangePw : (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    setLoginBtnStatus : (status : boolean) => void
    onClickLoginBtn : (e : React.FormEvent<HTMLInputElement>) => void
    onClickFindBtn : () => void
    onClickRegisterBtn : () => void

    registerStatus : number
}




const AuthForm = (props : Props) => {
    return (
        <>
            {
                props.status === Enum_AuthStatus.Login ?
                    <LoginForm
                        loginBtnStatus={props.loginBtnStatus}
                        onChangeId={props.onChangeId}
                        onChangePw={props.onChangePw}
                        setLoginBtnStatus={props.setLoginBtnStatus}
                        onClickLoginBtn={props.onClickLoginBtn}
                        onClickFindBtn={props.onClickFindBtn}
                        onClickRegisterBtn={props.onClickRegisterBtn}
                    />
                    :
                    props.status === Enum_AuthStatus.Find ?
                        <>구현중...</>
                        :
                        <>
                            <RegisterProgress status={props.registerStatus}/>
                            <RegisterForm/>
                        </>



            }


        </>
    )
}

export default AuthForm