import React, {useEffect, useState} from "react"
import styled from "styled-components"
import {Enum_RegisterProgress} from "../../../types/Auth";


const Wrapper = styled.div`
  width : 100%;
  max-width : 350px;
  height : auto;
  display : grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(2, 50px);
  align-items: center;
  font-family: 'Noto Sans KR', sans-serif;
  @media(max-width: 500px){
    max-width : 280px;
    grid-template-rows: repeat(2, 40px);
  }
`
type ProgressProps = {
    enable : boolean
}

const Text = styled.p`
  font-size : 0.75rem;
  color : ${(props : ProgressProps) => props.enable ? `#63C2C6;` : `#DBDBDB;`};
  grid-column : span 1;
  grid-row : span 1;
  padding : 0;
  margin : 0;
  font-weight: bold;
  text-align: center;
`

const Section = styled.div`
  max-width : 50px;
  width : 100%;
  max-height : 50px;
  height : 100%;
  border : 4px solid ${(props : ProgressProps) => props.enable ? `#63C2C6;` : `#DBDBDB;`}
  color : ${(props : ProgressProps) => props.enable ? `#ffffff;` : `#DBDBDB;`};
  background-color : ${(props : ProgressProps) => props.enable ? `#81CFD1;` : `#ffffff;`};
  grid-column : span 1;
  grid-row : span 1;
  padding : 0;
  margin : 0;
  box-sizing: border-box;
  border-radius : 100%;
  display : flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 500px){
    max-width : 40px;
    width : 100%;
    max-height : 40px;
    height : 100%;
  }
`

const Empty = styled.div`
  grid-column: span 1;
`

const Bar = styled.div`
  grid-column : span 1;
  grid-row : span 1;
  border : 2px solid ${(props : ProgressProps) => props.enable ? `#63C2C6;` : `#DBDBDB;`};
  background-color : ${(props : ProgressProps) => props.enable ? `#63C2C6;` : `#DBDBDB;`};
  width : 100%;
  height : 2px;
  padding : 0;
  margin : 0;
  box-sizing: border-box;
`


type Props = {
    status : Enum_RegisterProgress
}

const RegisterProgress = (props : Props) => {

    const [indicator, setIndicator] = useState([false, false, false, false])

    useEffect(()=>{
        setIndicator((state : boolean[]) =>{
            const prev = [...state]
            return prev.fill(true,0, props.status+1)
        })
    },[props.status])



    return (
        <Wrapper>
            <Text enable={indicator[0]}>이메일</Text><Empty/>
            <Text enable={indicator[1]}>아이디</Text><Empty/>
            <Text enable={indicator[2]}>암호</Text><Empty/>
            <Text enable={indicator[3]}>완료</Text>
            <Section enable={indicator[0]}>1</Section>
            <Bar enable={indicator[1]}></Bar>
            <Section enable={indicator[1]}>2</Section>
            <Bar enable={indicator[2]}></Bar>
            <Section enable={indicator[2]}>3</Section>
            <Bar enable={indicator[3]}></Bar>
            <Section enable={indicator[3]}>4</Section>
        </Wrapper>
    )
}

export default RegisterProgress
