import React from "react"
import styled from "styled-components";
import Logo from "../../../img/logo.png"

type Props = {
    status : number
    onChangeId : (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    onChangePw : (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    loginBtnStatus : boolean
    setLoginBtnStatus : (status : boolean) => void
    onClickLoginBtn : (e : React.FormEvent<HTMLInputElement>) => void
    onClickFindBtn : () => void
    onClickRegisterBtn : () => void
}

enum Status {
    Login,
    Register,
    Find
}

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

const LoginForm = styled.form`
  width : 100%;
  height : auto;
  display : flex;
  flex-direction: column;
  align-items: center;
`

const Input = styled.input.attrs(props => ({
    type: "text",
}))`
  width : 70%;
  height : 2.2rem;
  background: #FAFAFA;
  border : 1px solid #DBDBDB;
  border-radius: 5px;
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
  background: ${(props: ButtonProps) => props.status ? "#81CFD1" : "#AEDFE1"};
  border-radius: 5px;
  border : none;
  margin-bottom: 5.5rem;
  color : white;
  font-size : 0.75rem;
  display : flex;
  justify-content: center;
  align-items: center;
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
`


const AuthForm = (props : Props) => {
    return (
        <>

            <Wrapper>

                {
                    (props.status===Status.Login) ?
                        <>
                            <LogoImg src={Logo}/>
                            <LoginForm>
                                <Input placeholder={"아이디"} onChange={props.onChangeId}/>
                                <Input placeholder={"비밀번호"} onChange={props.onChangePw}/>
                                <LoginButton status={props.loginBtnStatus} value={"로그인"}
                                             onClick={props.onClickLoginBtn}>
                                </LoginButton>

                                <MenuWrapper>

                                    <Menu onClick={props.onClickFindBtn}>계정을 잊으셨나요?</Menu>

                                    <Menu onClick={props.onClickRegisterBtn}>회원가입</Menu>


                                </MenuWrapper>
                            </LoginForm>
                        </>
                        :
                        (props.status===Status.Find) ?
                            <>
                                구현중...
                            </>
                            :
                            <>
                                구현중...
                            </>
                }

            </Wrapper>
        </>
    )
}

export default AuthForm