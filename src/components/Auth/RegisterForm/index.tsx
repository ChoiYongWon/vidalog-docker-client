import React from "react"
import styled from "styled-components";
import EmailForm from "./EmailForm";

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

}


const RegisterForm = (props : Props) => {
    return (
        <Wrapper>
            <EmailForm/>

        </Wrapper>
    )
}

export default RegisterForm