import React from "react"
import styled from "styled-components";



const Text = styled.p`
  font-size : 1rem;
  font-weight : bold;
  color : #707070;
`
const Form = styled.form`
  width : 100%;
  height : auto;
  display : flex;
  flex-direction: column;
  align-items: center;
`

const Input = styled.input`
  width : 70%;
  height : 2.2rem;
  background: #ffffff;
  border : 0;
  border-bottom : 2px solid #63C2C6;
  margin-bottom: 1rem;
  padding : 0.5rem;
  box-sizing: border-box;
  outline: none;
  font-size : 0.75rem;
`

type ButtonProps = {
    status : boolean
}

const Button = styled.input.attrs(props => ({
    type: "submit",
}))`
  width : 70%;
  height : 2.2rem;
  background: ${(props: ButtonProps) => props.status ? "#81CFD1;" : "#AEDFE1;"};
  border-radius: 5px;
  border : none;
  color : white;
  font-size : 0.75rem;
  display : flex;
  justify-content: center;
  align-items: center;
  outline: 0;
`

type Props = {
    emailStatus : emailStatusType
    onClickEmailSubmitBtn : (e: React.FormEvent<HTMLInputElement>)=> void
}

type emailStatusType = {
    availableEmail : boolean
    checking : boolean
    checked : boolean
}


const EmailForm = (props : Props) => {
    return (
            <>
                <Text>이메일을 입력해주세요</Text>
                <Form>
                    <Input placeholder={"이메일"} type={"text"}/>
                    {
                        props.emailStatus.checking ? <Input placeholder={"인증번호"} type={"text"}/> : null
                    }
                    <Button status={true} onClick={props.onClickEmailSubmitBtn} value={"완료"}/>
                </Form>
            </>
    )
}

export default EmailForm