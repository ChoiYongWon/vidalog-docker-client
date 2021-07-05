import React from "react";
import {useRecoilValue} from "recoil";

import AuthForm from "../../../components/Auth/AuthForm"
import AuthLayout from "../../../layouts/Auth";

import {auth_status} from "../../../recoils/auth";
const AuthContainer = () => {

    const authStatus = useRecoilValue(auth_status)

    return (

            <AuthLayout>
                <AuthForm
                          status={authStatus}
                />

            </AuthLayout>


    )
}

export default AuthContainer