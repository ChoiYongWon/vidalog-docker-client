import React, {useEffect, useState} from "react"
import styled, {keyframes} from "styled-components"
import {MdKeyboardArrowLeft,MdKeyboardArrowRight} from "react-icons/md"

const Wrapper = styled.div`
  width: 100%;
  max-width: 844px;
  min-width: 16.75rem;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  box-shadow : rgb(0 0 0 / 15%) 0px 0px 10px;
  border-radius: 0.5rem;

  @media(max-width: 600px){
    box-shadow: none;
    padding: 0.5rem;
  }
  
`

const MonthTitle = styled.div`
  font-size: 1.2rem;
  color : rgb(52,58,64);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
  user-select: none;
`

// const IconWrapper = styled.div`
//
// `

const DayBar = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem 0;
  font-size: 0.875rem;
  color: rgb(52,58,64);
  display: flex;
`

const Day = styled.div`
  width: 14.2857%;
  height: 1.5rem;
  min-width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  user-select: none;
  @media(max-width: 600px){
    min-width: 2.25rem;
  }
`

const DayWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
`

const DayItem = styled.div`
  width: 14.2857%;
  min-width: 3rem;
  min-height: 3rem;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.75rem;
  box-sizing: border-box;

  @media(max-width: 600px){
    min-width: 2.25rem;
    min-height: 2.25rem;
    padding:  0.25rem 0.5rem;
  }
`

const DayImageNumWrapper = styled.span`
  color : rgb(255,255,255);
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;

`

const DayNum = styled.span`
  backdrop-filter: blur(2px);
  font-weight: bold;
`

const DayImageWrapper = styled.div`
  cursor: pointer;
  user-select: none;
  width: 3rem;
  height: 3rem;
  position: relative;

  @media(max-width: 600px){
    width: 2.25rem;
    height: 2.25rem;
  }
`

const DayImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  object-fit: cover;
  position: absolute;
`

const NonFilledItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(52,58,64);
  font-weight: bold;
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  cursor: pointer;
  user-select: none;
  
  &:hover{
    background: rgba(0,0,0,0.1);
  }

  @media(max-width: 600px){
    width: 2.25rem;
    height: 2.25rem;
  }
`

const LoadingAnimation = keyframes`
  0% {
    transform: scale(1.2);
  }
  30% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
`

const LoadingFallBackWrapper = styled.div`
  width: 100%;
  height: 22.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: 600px){
    height: 13.75rem;
  }
`

const LoadingFallBack = styled.div`
  animation: ${LoadingAnimation} 1s ease infinite;
  font-size: 1.2rem;
`


type Props = {
    viewMonth: number
    viewYear: number
    loading: boolean
    postInfo : any
    onCalendarPrevClick: ()=>void
    onCalendarNextClick: ()=>void
    onEmptyClick: (e:any)=>void
} & typeof defaultProps

const defaultProps = {
    viewYear: new Date().getFullYear(),
    viewMonth: new Date().getMonth() + 1,
    loading: false,
    postInfo: {},
    onCalendarPrevClick: ()=> {},
    onCalendarNextClick: ()=> {},
    onEmptyClick: (e:any)=>{}
}

const Calendar = (props: Props) => {

    const [monthInfo, setMonthInfo] = useState([0,0])

    useEffect(()=>{
        const date = new Date(`${props.viewYear}-${props.viewMonth}-1`)
        let startDay = date.getDay()
        date.setMonth(date.getMonth() + 1)
        date.setDate(date.getDate() - 1)
        let maxDate = date.getDate()
        setMonthInfo([startDay, maxDate])
        console.log(startDay, maxDate)
    },[props.viewYear, props.viewMonth])

    const days = ["일", "월", "화", "수", "목", "금", "토"]

    return (
        <>
            <Wrapper>
                <MonthTitle>
                    <MdKeyboardArrowLeft onClick={props.onCalendarPrevClick} size={30} color={"rgb(52,58,64)"} style={{
                        cursor: "pointer"
                    }}/>
                    {props.viewYear}년 {props.viewMonth}월
                    <MdKeyboardArrowRight onClick={props.onCalendarNextClick} size={30} color={"rgb(52,58,64)"} style={{
                        cursor: "pointer"
                    }}/>
                </MonthTitle>
                <DayBar>
                    {
                        days.map((day)=><Day>{day}</Day>)
                    }
                </DayBar>
                {
                    props.loading ?
                        <LoadingFallBackWrapper>
                            <LoadingFallBack>로딩중...</LoadingFallBack>
                        </LoadingFallBackWrapper>

                        :
                        <DayWrapper>
                            {
                                Array(35).fill(1).map((data, i)=>{
                                    const currentDate = `${props.viewYear}-${props.viewMonth}-${(i - monthInfo[0] + 1)}`
                                    if(i<monthInfo[0] || (i - monthInfo[0] + 1)>monthInfo[1]) return <DayItem key={i}></DayItem>
                                    if(!Object.keys(props.postInfo).includes(currentDate)) return (
                                        <DayItem key={i}>
                                            <NonFilledItem onClick={props.onEmptyClick} data-date={currentDate}>{i - monthInfo[0] + 1}</NonFilledItem>
                                        </DayItem>
                                    )
                                    return (<DayItem key={i}>
                                        <DayImageWrapper>
                                            <DayImage src={props.postInfo[currentDate]}></DayImage>
                                            <DayImageNumWrapper>
                                                <DayNum>{i - monthInfo[0] + 1}</DayNum>
                                            </DayImageNumWrapper>
                                        </DayImageWrapper>
                                    </DayItem>)
                                })
                            }
                        </DayWrapper>
                }
            </Wrapper>
        </>

    )
}

Calendar.defaultProps = defaultProps

export default Calendar
