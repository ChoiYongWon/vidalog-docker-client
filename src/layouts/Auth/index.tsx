import React from "react"
import styled from "styled-components";

const Container = styled.div`
  display : flex;
  justify-content: center;
  align-items: center;
  width : 100vw;
  height : 100vh;
`

type AuthProps = {
    children : any
}

const AuthLayout = (props : AuthProps) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default AuthLayout