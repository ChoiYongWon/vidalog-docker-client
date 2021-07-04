import React from "react"
import styled from "styled-components";
import {Enum_RegisterProgress} from "../../../types/Auth";
import EmailForm from "./EmailForm";
import IdForm from "./IdForm";

const Wrapper = styled.div`
  max-width : 350px;
  width : 100%;
  height : auto;
  padding : 1rem 1rem 2rem;
  box-sizing: border-box;
  border : 1px #DBDBDB solid;
  border-radius: 10px;
  display : flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media(max-width: 500px){
    border : none;
  }
`

type Props = {
    registerStatus : Enum_RegisterProgress
    emailStatus : emailStatusType
    onClickEmailSubmitBtn : (e:React.FormEvent<HTMLInputElement>)=>void
}

type emailStatusType = {
    availableEmail : boolean
    checking : boolean
    checked : boolean
}


const RegisterForm = (props : Props) => {
    return (
        <Wrapper>
            {
                (props.registerStatus===Enum_RegisterProgress.EMAIL) ?
                    <EmailForm
                        emailStatus={props.emailStatus}
                        onClickEmailSubmitBtn={props.onClickEmailSubmitBtn}
                    /> :
                (props.registerStatus===Enum_RegisterProgress.ID) ?
                    <IdForm/>
                    :
                    null

            }



        </Wrapper>
    )
}

export default RegisterForm