import React from "react"
import {recoil_Auth} from "../../../recoils/";
import {useRecoilValue} from "recoil";
import RegisterForm from "../../../components/Auth/RegisterForm";

const RegisterFormContainer = () => {
        const registerStatus = useRecoilValue(recoil_Auth.register_status)

        return <RegisterForm registerStatus={registerStatus}/>
}

export default RegisterFormContainer