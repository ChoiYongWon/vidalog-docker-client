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
  margin-bottom: 5.5rem;
  color : white;
  font-size : 0.75rem;
  display : flex;
  justify-content: center;
  align-items: center;
  outline: 0;
`

type Props = {

}


const SuccessForm = (props : Props) => {
    return (
        <>
            <Text>이메일을 입력해주세요</Text>
            <Form>
                <Input placeholder={"이메일"} type={"text"}/>
                <Button status={true} value={"로그인"}/>
            </Form>
        </>
    )
}

export default SuccessForm