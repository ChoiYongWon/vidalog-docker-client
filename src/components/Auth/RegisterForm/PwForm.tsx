import React from "react"
import styled from "styled-components";
import InputText from "../InputText";



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

type ButtonProps = {
    status : boolean
}

const Button = styled.input.attrs(props => ({
    type: "submit",
}))`
  width : 75%;
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
  margin-top : 1rem;
`

type Props = {
    pw : string
    rePw : string
    pwError : boolean
    pwErrorMsg : string
    rePwError : boolean
    rePwErrorMsg : string
    onClickPwSubmitBtn : (e: React.FormEvent<HTMLInputElement>)=> void
    onChangePw : (e:React.ChangeEvent<HTMLInputElement>) => void
    onChangeRePw : (e:React.ChangeEvent<HTMLInputElement>) => void
    pwBtnStatus : boolean

}



const PwForm = (props : Props) => {
    return (
        <>
            <Text>비밀번호를 입력해주세요</Text>
            <Form>
                <InputText autoFocus={true} error={props.pwError} errorMsg={props.pwErrorMsg}  width={"75%"} label={"비밀번호"} value={props.pw} onChange={props.onChangePw} type={"password"}/>
                <InputText error={props.rePwError} errorMsg={props.rePwErrorMsg} width={"75%"} label={"비밀번호 확인"} value={props.rePw} onChange={props.onChangeRePw} type={"password"}/>
                <Button status={props.pwBtnStatus} onClick={props.onClickPwSubmitBtn} value={"확인"}/>
            </Form>
        </>
    )
}

export default PwForm