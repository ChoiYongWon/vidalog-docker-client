import styled from "styled-components";
import React from "react"
import Logo from "../../../img/logo.png"


const Wrapper = styled.div`
  max-width : 350px;
  width : 100%;
  height : auto;
  padding : 1rem;
  box-sizing: border-box;
  border : 1px #DBDBDB solid;
  border-radius: 10px;
  display : flex;
  flex-direction: column;
  align-items: center;
  @media(max-width: 500px){
    border : none;
  }
`

const LogoImg = styled.img`
  width : 33%;
  height : auto;
  margin-bottom: 2rem;
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

const LoginButton = styled.input.attrs(props => ({
    type: "submit",
}))`
  width : 70%;
  height : 2.2rem;
  background: ${(props: ButtonProps) => props.status ? "#63C2C6;" : "#AEDFE1;"};
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

const MenuWrapper = styled.div`
  display : flex;
  width : 70%;
  justify-content: space-between;
  
`

const Menu = styled.button`
  text-decoration: none;
  font-size : 0.75rem;
  color : #707070;
  outline : none;
  border : none;
  background : none;
  cursor: pointer;
  padding : 0;
`

type Props = {
    id: string
    pw : string
    onChangeId : (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    onChangePw : (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    loginBtnStatus : boolean
    onClickLoginBtn : (e : React.FormEvent<HTMLInputElement>) => void
    onClickFindBtn : () => void
    onClickRegisterBtn : () => void
}


const LoginForm = (props : Props) => {
    return (
        <Wrapper>
            <>
                <LogoImg src={Logo}/>
                <Form>
                    <Input placeholder={"아이디"} value={props.id} onChange={props.onChangeId} type={"text"}/>
                    <Input placeholder={"비밀번호"} value={props.pw} onChange={props.onChangePw} type={"password"}/>
                    <LoginButton status={props.loginBtnStatus} value={"로그인"}
                                 onClick={props.onClickLoginBtn}>
                    </LoginButton>


                </Form>
                <MenuWrapper>

                    <Menu onClick={props.onClickFindBtn}>계정을 잊으셨나요?</Menu>

                    <Menu onClick={props.onClickRegisterBtn}>회원가입</Menu>


                </MenuWrapper>
            </>

        </Wrapper>
    )
}

export default LoginForm