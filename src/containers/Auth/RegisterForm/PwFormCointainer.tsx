import React, {useEffect, useState} from "react"
import {useRecoilState, useSetRecoilState} from "recoil";
import {recoil_Auth} from "../../../recoils/";
import {Enum_RegisterProgress} from "../../../types/Auth";
import PwForm from "../../../components/Auth/RegisterForm/PwForm";


const PwFormContainer = () => {

    const [pw, setPw] = useRecoilState(recoil_Auth.pw_pw)
    const [rePw, setRePw] = useRecoilState(recoil_Auth.pw_rePw)
    const [pwBtnStatus, setPwBtnStatus] = useRecoilState(recoil_Auth.pw_btnStatus)
    const [availablePw, setAvailablePw] = useRecoilState(recoil_Auth.pw_availablePw)
    const setRegisterStatus = useSetRecoilState(recoil_Auth.register_status)

    const [pwErrorObj, setPwErrorObj] = useState({
        error : false,
        msg : ""
    })

    const [rePwErrorObj, setRePwErrorObj] = useState({
        error : false,
        msg : ""
    })

    const pwFilter = (pw : string) => {
        return pw.length >= 8
    }

    useEffect(()=>{
        if(pw.length > 0 && rePw.length > 0)
            setPwBtnStatus(true)
        else
            setPwBtnStatus(false)
    }, [pw, rePw,setPwBtnStatus])

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

            setPwErrorObj({error : false, msg : ""})
            setRePwErrorObj({error : false, msg : ""})

            if(!pwFilter(pw)) {
                setPwErrorObj({error: true, msg: "비밀번호는 8자 이상이어야합니다."})
                return
            }

            if(pw !== rePw){

                setRePwErrorObj({error : true, msg : "비밀번호가 일치하지 않습니다."})

                return
            }

            setAvailablePw(true)
            //TODO 비밀번호 POST Api
            setRegisterStatus(Enum_RegisterProgress.SUCCESS)
        }

        //임시 코드
        //이메일 인증번호 체킹
    }

    return <PwForm
        pw={pw}
        rePw={rePw}
        pwError={pwErrorObj.error}
        pwErrorMsg={pwErrorObj.msg}
        rePwError={rePwErrorObj.error}
        rePwErrorMsg={rePwErrorObj.msg}
        onClickPwSubmitBtn={onClickPwSubmitBtn}
        onChangePw={onChangePw}
        onChangeRePw={onChangeRePw}
        pwBtnStatus={pwBtnStatus}
    />
}

export default PwFormContainer