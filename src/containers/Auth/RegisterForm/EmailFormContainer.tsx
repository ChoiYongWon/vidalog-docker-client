import React, {useCallback, useEffect, useState} from "react"
import {useRecoilState, useResetRecoilState, useSetRecoilState} from "recoil";
import {recoil_Auth} from "../../../recoils/";
import EmailForm from "../../../components/Auth/RegisterForm/EmailForm";
import {Enum_RegisterProgress} from "../../../types/Auth";


const EmailFormContainer = () => {
    const [email, setEmail] = useRecoilState(recoil_Auth.email_email)
    // const [authCode, setAuthCode] = useRecoilState(recoil_Auth.email_authCode)
    // const [emailAvailable, setEmailAvailable] = useRecoilState(recoil_Auth.email_availableEmail)
    // const [codeAvailable, setCodeAvailable] = useRecoilState(recoil_Auth.email_availableCode)
    // const [emailAuthorization, setEmailAuthorization] = useRecoilState(recoil_Auth.email_authorization)
    const [authCode, setAuthCode] = useState("")
    const [emailAvailable, setEmailAvailable] = useState(false)
    const [codeAvailable, setCodeAvailable] = useState(false)
    const [emailAuthorization, setEmailAuthorization] = useState(false)
    // const [emailBtnStatus, setEmailBtnStatus] = useRecoilState(recoil_Auth.email_btnStatus)
    const [emailBtnStatus, setEmailBtnStatus] = useState(false)
    const setRegisterStatus = useSetRecoilState(recoil_Auth.register_status)

    //초기화 과정
    const resetAuth = useResetRecoilState(recoil_Auth.auth_status)
    const resetRegisterStatus = useResetRecoilState(recoil_Auth.register_status)
    const resetEmail = useResetRecoilState(recoil_Auth.email_email)
    const resetPw = useResetRecoilState(recoil_Auth.pw_pw)
    const resetRePw = useResetRecoilState(recoil_Auth.pw_rePw)
    const resetId = useResetRecoilState(recoil_Auth.id_id)

    const [emailErrorObj, setEmailErrorObj] = useState({
        error : false,
        msg : ""
    })
    const [authCodeErrorObj, setAuthCodeErrorObj] = useState({
        error : false,
        msg : ""
    })
    //TODO 이메일 인증코드 요청후 이메일 변경에 대한 방안
    useEffect(()=>{
        if(!emailAuthorization)
            if(email.length > 0)
                setEmailBtnStatus(true)
            else
                setEmailBtnStatus(false)
        else
            if(email.length > 0 && authCode.length > 0)
                setEmailBtnStatus(true)
            else
                setEmailBtnStatus(false)
    }, [emailAuthorization, authCode, email, setEmailBtnStatus])

    const emailFilter = (email : string) => {
        const regExp =  new RegExp(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i);
        return regExp.test(email)
    }


    const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    },[setEmail])

    const onChangeCode = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setAuthCode(e.target.value)
    },[setAuthCode])

    const onClickPrevBtn = useCallback(()=>{
        resetAuth()
        resetRegisterStatus()
        resetEmail()
        resetId()
        resetPw()
        resetRePw()

    },[resetAuth, resetRegisterStatus, resetEmail,resetId,resetPw,resetRePw])

    const onClickEmailSubmitBtn = useCallback((e : React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        if(!emailBtnStatus) return

        setEmailErrorObj({error: false, msg : ""})
        setAuthCodeErrorObj({error : false, msg: ""})

        if(!emailAuthorization){ //인증코드 안받았을때
            if(!emailFilter(email)){
                setEmailErrorObj({error: true, msg : "이메일 형식이 올바르지 않습니다."})
                return
            }

            //TODO 가입된 이메일인지 확인 API

            setEmailAvailable(true)

            //TODO 인증코드 요청 API

            setEmailAuthorization(true)
            return
        }
        //이메일 통과 시점
        //TODO 인증코드 확인 API
        //임시 코드
        setCodeAvailable(true)
        setRegisterStatus(Enum_RegisterProgress.ID)
        //TODO availableEmail, availableCode 맞으면 통과

        if(emailAvailable && codeAvailable){

        }
        //이메일 인증번호 체킹
    },[emailAuthorization, emailBtnStatus, setEmailErrorObj, setAuthCodeErrorObj, email, setEmailAvailable, setEmailAuthorization, setCodeAvailable, emailAvailable, codeAvailable, setRegisterStatus])

    return <EmailForm
        email={email}
        emailError={emailErrorObj.error}
        emailErrorMsg={emailErrorObj.msg}
        codeError={authCodeErrorObj.error}
        codeErrorMsg={authCodeErrorObj.msg}
        authCode={authCode}
        authorization={emailAuthorization}
        emailBtnStatus={emailBtnStatus}
        onClickEmailSubmitBtn={onClickEmailSubmitBtn}
        onClickPrevBtn={onClickPrevBtn}
        onChangeEmail={onChangeEmail}
        onChangeCode={onChangeCode}
    />
}

export default EmailFormContainer