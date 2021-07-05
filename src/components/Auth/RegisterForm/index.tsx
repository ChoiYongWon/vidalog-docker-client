import React from "react"
import styled from "styled-components";
import {Enum_RegisterProgress} from "../../../types/Auth";

import EmailFormContainer from "../../../containers/Auth/RegisterForm/EmailFormContainer";
import PwFormCointainer from "../../../containers/Auth/RegisterForm/PwFormCointainer";
import IdFormContainer from "../../../containers/Auth/RegisterForm/IdFormContainer";
import SuccessFormContainer from "../../../containers/Auth/RegisterForm/SuccessFormContainer";

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
}


const RegisterForm = (props : Props) => {
    return (
        <Wrapper>
            {
                (props.registerStatus===Enum_RegisterProgress.EMAIL) ?
                    <EmailFormContainer/> :
                (props.registerStatus===Enum_RegisterProgress.ID) ?
                    <IdFormContainer/> :
                (props.registerStatus===Enum_RegisterProgress.PW) ?
                    <PwFormCointainer/> : <SuccessFormContainer/>

            }



        </Wrapper>
    )
}

export default RegisterForm