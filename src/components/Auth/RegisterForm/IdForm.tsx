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

export type idStatusType = {

}

type Props = {
    id : string
    error : boolean
    errorMsg : string
    idBtnStatus : boolean
    idAvailable : boolean
    onClickIdSubmitBtn : (e : React.FormEvent<HTMLInputElement>) => void
    onChangeId : (e : React.ChangeEvent<HTMLInputElement>) => void
}


const IdForm = (props : Props) => {
    return (
        <>
            <Text>아이디를 입력해주세요</Text>
            <Form>
                <InputText autoFocus={true} width={"75%"} label={"아이디"} value={props.id} onChange={props.onChangeId} type={"text"}/>
                <Button status={props.idBtnStatus} onClick={props.onClickIdSubmitBtn} value={"확인"}/>
            </Form>
        </>
    )
}

export default IdForm