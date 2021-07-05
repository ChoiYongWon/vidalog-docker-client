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
  background: ${(props: ButtonProps) => props.status ? "#63C2C6;" : "#AEDFE1;"};
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
    email : string
    availableEmail : boolean
    authorization : boolean
    emailBtnStatus : boolean
    onClickEmailSubmitBtn : (e: React.FormEvent<HTMLInputElement>)=> void
    onChangeEmail : (e : React.ChangeEvent<HTMLInputElement>) => void
    onChangeCode : (e : React.ChangeEvent<HTMLInputElement>) => void
}


const EmailForm = (props : Props) => {
    return (
            <>
                <Text>이메일을 입력해주세요</Text>
                <Form>
                    <Input placeholder={"이메일"} onChange={props.onChangeEmail} value={props.email} type={"text"}/>
                    {
                        props.authorization ? <Input placeholder={"인증번호"} onChange={props.onChangeCode} type={"text"}/> : null
                    }
                    <Button status={props.emailBtnStatus} onClick={props.onClickEmailSubmitBtn} value={"완료"}/>
                </Form>
            </>
    )
}

export default EmailForm