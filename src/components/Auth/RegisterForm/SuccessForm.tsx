import React from "react"
import styled from "styled-components";
// import Success from "../../../img/success.png"

// const SuccessImg = styled.img`
//   width : 25%;
//   height : auto;
//   margin-bottom: 2rem;
// `

const Text = styled.p`
  font-size : 1.125rem;
  font-weight : bold;
  color : #707070;
`


const Button = styled.input.attrs(props => ({
    type: "submit",
}))`
  width : 70%;
  height : 2.2rem;
  background: #63C2C6;
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
    onClickBtn : (e: React.FormEvent<HTMLInputElement>) => void
}


const SuccessForm = (props : Props) => {
    return (
        <>
            <Text>회원가입이 완료되었습니다.</Text>
            {/*<SuccessImg src={Success}/>*/}
            <Button onClick={props.onClickBtn} value={"확인"}/>
        </>
    )
}

export default SuccessForm