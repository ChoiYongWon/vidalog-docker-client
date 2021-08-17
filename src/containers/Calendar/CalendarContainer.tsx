import React, {useEffect, useState} from "react"
import {PostAPI} from "../../api/PostAPI"
import Calendar from "../../components/Calendar";
import {useSetRecoilState} from "recoil";
import {recoil_Home} from "../../recoils";
import {useHistory} from "react-router-dom";


const CalendarContainer = () => {

    const [monthlyPost, setMonthlyPost] = useState({})
    const [viewDate, setViewDate] = useState<Date>(new Date())
    const setEditDate = useSetRecoilState(recoil_Home.editDate)
    const history = useHistory()

    useEffect(()=>{
        PostAPI.getPostByMonth(`${viewDate.getFullYear()}-${viewDate.getMonth()+1}`).then(async(res)=>{
            const dates: [] = await res.json()
            const result = {}
            dates.forEach((data)=>result[data["date"]] = data["imgUrl"])
            setMonthlyPost(result)
        })
    },[viewDate])

    const onCalendarPrevClick = () => {
        setViewDate((state)=>{
            const newDate = new Date(state)
            newDate.setMonth(newDate.getMonth()-1)
            return newDate
        })
    }

    const onCalendarNextClick = () => {
        setViewDate((state)=>{
            const newDate = new Date(state)
            newDate.setMonth(newDate.getMonth()+1)
            return newDate
        })
    }

    const onEmptyClick = (e:any) => {
        const dateInfo= e.currentTarget.dataset.date.split("-")
        setEditDate({
            year: dateInfo[0],
            month: dateInfo[1],
            date: dateInfo[2]
        })
        history.push("edit")
    }

    return <>
        <Calendar viewMonth={viewDate.getMonth()+1} viewYear={viewDate.getFullYear()} postInfo={monthlyPost} onCalendarPrevClick={onCalendarPrevClick} onCalendarNextClick={onCalendarNextClick} onEmptyClick={onEmptyClick}/>
    </>


}

export default CalendarContainer