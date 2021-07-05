import React, {useEffect} from "react"
import {useRecoilState, useSetRecoilState} from "recoil";
import {recoil_Auth} from "../../../recoils/";
import {Enum_RegisterProgress} from "../../../types/Auth";
import IdForm from "../../../components/Auth/RegisterForm/IdForm";


const IdFormContainer = () => {
    const [idAvailable, setIdAvailable] = useRecoilState(recoil_Auth.id_availableId)
    const [id, setId] = useRecoilState(recoil_Auth.id_id)
    const setRegisterStatus = useSetRecoilState(recoil_Auth.register_status)
    const [idBtnStatus, setIdBtnStatus] = useRecoilState(recoil_Auth.id_btnStatus)

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
            //id 중복 확인 api
            setIdAvailable(true)

        }

        //임시 코드
        setRegisterStatus(Enum_RegisterProgress.PW)
        //이메일 인증번호 체킹
    }

    return <IdForm
        id={id}
        idBtnStatus={idBtnStatus}
        idAvailable={idAvailable}
        onClickIdSubmitBtn={onClickIdSubmitBtn}
        onChangeId={onChangeId}
    />
}

export default IdFormContainer