import React, {useEffect} from "react"
import {useRecoilState, useSetRecoilState} from "recoil";
import {recoil_Auth} from "../../../recoils/";
import EmailForm from "../../../components/Auth/RegisterForm/EmailForm";
import {Enum_RegisterProgress} from "../../../types/Auth";


const EmailFormContainer = () => {
    const [email, setEmail] = useRecoilState(recoil_Auth.email_email)
    const [authCode, setAuthCode] = useRecoilState(recoil_Auth.email_authCode)
    const [emailAvailable, setEmailAvailable] = useRecoilState(recoil_Auth.email_availableEmail)
    const [emailAuthorization, setEmailAuthorization] = useRecoilState(recoil_Auth.email_authorization)
    const [emailBtnStatus, setEmailBtnStatus] = useRecoilState(recoil_Auth.email_btnStatus)
    const setRegisterStatus = useSetRecoilState(recoil_Auth.register_status)

    const emailFilter = (email : string) => {
        return email.includes("@") && email.length > 3
    }

    const codeFilter = (code : string) => {
        return code.length > 0
    }

    useEffect(()=>{
        if(!emailFilter(email)){
            return
        }
        setEmailAvailable(true)
    }, [email, setEmailAvailable])

    useEffect(()=>{
        if(!emailAuthorization && emailAvailable){
            setEmailBtnStatus(true)
            return
        }
        if(emailAuthorization && emailAvailable && codeFilter(authCode)){
            setEmailBtnStatus(true)
            return
        }
        setEmailBtnStatus(false)
    }, [emailAuthorization, emailAvailable, setEmailBtnStatus, authCode])

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const onChangeCode = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAuthCode(e.target.value)
    }

    const onClickEmailSubmitBtn = (e : React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        // if(!emailStatus.availableEmail) return
        if(!emailBtnStatus) return
        if(!emailAuthorization){
            setEmailAuthorization(true)
            return
        }
        //임시 코드
        setRegisterStatus(Enum_RegisterProgress.ID)
        //이메일 인증번호 체킹
    }

    return <EmailForm
        email={email}
        availableEmail={emailAvailable}
        authorization={emailAuthorization}
        emailBtnStatus={emailBtnStatus}
        onClickEmailSubmitBtn={onClickEmailSubmitBtn}
        onChangeEmail={onChangeEmail}
        onChangeCode={onChangeCode}
    />
}

export default EmailFormContainer