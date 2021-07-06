import React, {useEffect, useState} from "react"
import {useRecoilState, useSetRecoilState} from "recoil";
import {recoil_Auth} from "../../../recoils/";
import {Enum_RegisterProgress} from "../../../types/Auth";
import IdForm from "../../../components/Auth/RegisterForm/IdForm";


const IdFormContainer = () => {
    const [idAvailable, setIdAvailable] = useRecoilState(recoil_Auth.id_availableId)
    const [id, setId] = useRecoilState(recoil_Auth.id_id)
    const setRegisterStatus = useSetRecoilState(recoil_Auth.register_status)
    const [idBtnStatus, setIdBtnStatus] = useRecoilState(recoil_Auth.id_btnStatus)
    const [errorObj, setErrorObj] = useState({
        error : false,
        msg : ""
    })

    const onChangeId = (e : React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value)
    }

    useEffect(()=>{
        if(id.length!==0) setIdBtnStatus(true)
        else setIdBtnStatus(false)
    }, [id, setIdBtnStatus])

    const onClickIdSubmitBtn = (e : React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        if(!idBtnStatus) return
        if(!idAvailable){
            //loading
            //TODO id 조건 확인
            //TODO id 중복 확인 api
            setErrorObj({
                error: false,
                msg: ""
            })
            setIdAvailable(true)
            //TODO ID POST Api
            setRegisterStatus(Enum_RegisterProgress.PW)
        }
    }

    return <IdForm
        id={id}
        error={errorObj.error}
        errorMsg={errorObj.msg}
        idBtnStatus={idBtnStatus}
        idAvailable={idAvailable}
        onClickIdSubmitBtn={onClickIdSubmitBtn}
        onChangeId={onChangeId}
    />
}

export default IdFormContainer