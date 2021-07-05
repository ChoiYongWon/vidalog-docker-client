import React from "react"
import {Enum_AuthStatus} from "../../../types/Auth";
import LoginFormContainer from "../../../containers/Auth/LoginForm/LoginFormContainer";
import RegisterProgressContainer from "../../../containers/Auth/RegisterProgress/RegisterProgressContainer";
import RegisterFormContainer from "../../../containers/Auth/RegisterForm/RegisterFormContainer";


type Props = {
    status : number
}




const AuthForm = (props : Props) => {
    return (
        <>
            {
                props.status === Enum_AuthStatus.Login ?
                    <LoginFormContainer/>
                    :
                props.status === Enum_AuthStatus.Find ?
                    <>구현중...</>
                    :
                    <>
                        <RegisterProgressContainer/>
                        <RegisterFormContainer/>

                    </>



            }


        </>
    )
}

export default AuthForm