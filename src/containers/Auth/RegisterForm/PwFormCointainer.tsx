import React, {useEffect} from "react"
import {useRecoilState, useSetRecoilState} from "recoil";
import {recoil_Auth} from "../../../recoils/";
import {Enum_RegisterProgress} from "../../../types/Auth";
import PwForm from "../../../components/Auth/RegisterForm/PwForm";


const PwFormContainer = () => {

    const [pw, setPw] = useRecoilState(recoil_Auth.pw_pw)
    const [rePw, setRePw] = useRecoilState(recoil_Auth.pw_rePw)
    const [pwBtnStatus, setPwBtnStatus] = useRecoilState(recoil_Auth.pw_btnStatus)
    const [availablePw, setAvailablePw] = useRecoilState(recoil_Auth.pw_availablePw)
    const [pwIsEqual, setPwIsEqual] = useRecoilState(recoil_Auth.pw_isEqual)
    const setRegisterStatus = useSetRecoilState(recoil_Auth.register_status)

    const pwFilter = (pw : string) => {
        return pw.length >= 8
    }

    useEffect(()=>{
        if(pw.length===0 && !pwFilter(pw)){
            setAvailablePw(false)
            return
        }
        setAvailablePw(true)
        if(pw === rePw){
            setPwIsEqual(true)
        } else {
            setPwIsEqual(false)
        }
    }, [pw, rePw, setPwIsEqual, setAvailablePw])

    useEffect(()=>{
        if(availablePw && pwIsEqual) setPwBtnStatus(true)
        else setPwBtnStatus(false)
    }, [availablePw, pwIsEqual, setPwBtnStatus])

    const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPw(e.target.value)
    }

    const onChangeRePw = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRePw(e.target.value)
    }

    const onClickPwSubmitBtn = (e : React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        if(!pwBtnStatus) return
        if(!availablePw){

            //Error

        }

        //임시 코드
        setRegisterStatus(Enum_RegisterProgress.SUCCESS)
        //이메일 인증번호 체킹
    }

    return <PwForm
        pw={pw}
        rePw={rePw}
        availablePw={availablePw}
        isEqual={pwIsEqual}
        onClickPwSubmitBtn={onClickPwSubmitBtn}
        onChangePw={onChangePw}
        onChangeRePw={onChangeRePw}
        pwBtnStatus={pwBtnStatus}
    />
}

export default PwFormContainer