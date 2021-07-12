import React from "react"
import styled from "styled-components";
import {Enum_RegisterProgress} from "../../../types/Auth";


const Wrapper = styled.div`
  max-width : 350px;
  width : 100%;
  height : auto;
  padding : 1rem 1rem 2rem;
  box-sizing: border-box;
  box-shadow : rgb(0 0 0 / 15%) 0px 0px 10px;
  border-radius: 10px;
  display : flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Noto Sans KR', sans-serif;
  transform : scale(1.1, 1.1);
  
  @media(max-width: 500px){
    box-shadow : none;
    transform: scale(1,1);

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