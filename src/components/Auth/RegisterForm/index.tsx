import React from "react"
import styled from "styled-components";
import {Enum_RegisterProgress} from "../../../types/Auth";


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
  font-family: 'Noto Sans KR', sans-serif;
  @media(max-width: 500px){
    border : none;
  }
`

type Props = {
    registerStatus : Enum_RegisterProgress
    children : React.ReactNode
}


const RegisterForm = (props : Props) => {
    return (
        <Wrapper>
            {
                props.children
            }



        </Wrapper>
    )
}

export default RegisterForm