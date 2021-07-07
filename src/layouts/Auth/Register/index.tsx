import styled from "styled-components"

const RegisterLayout = styled.div`
  display : flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width : 100vw;
  height : auto;
  gap : 1rem;
  box-sizing: border-box;
  padding : 5rem 0;
  @media(max-width: 500px){
    padding : 0;
  }
`

export default RegisterLayout