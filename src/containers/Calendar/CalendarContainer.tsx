import React, {useEffect, useState} from "react"
import {PostAPI} from "../../api/PostAPI"
import Calendar from "../../components/Calendar";
import {useSetRecoilState} from "recoil";
import {recoil_Home} from "../../recoils";
import {useHistory} from "react-router-dom";
import dayjs from 'dayjs'


const CalendarContainer = () => {

    const [monthlyPost, setMonthlyPost] = useState({})
    const [viewDate, setViewDate] = useState<any>(dayjs())
    const [viewLoading, setViewLoading] = useState(false)
    const setEditDate = useSetRecoilState(recoil_Home.editDate)
    const history = useHistory()

    useEffect(()=>{
        setViewLoading(true)
        PostAPI.getPostByMonth(`${viewDate.year()}-${viewDate.month()+1}`).then(async(res)=>{
            const dates: [] = await res.json()
            const result = {}
            dates.forEach((data)=>result[data["date"]] = data["imgUrl"])
            setMonthlyPost(result)
        }).then(()=>setViewLoading(false)).catch((e)=>setViewLoading(false))
    },[viewDate, setViewLoading])

    const onCalendarPrevClick = () => {
        setViewDate((state: any)=>{
            const newDate = dayjs(state).subtract(1, "month")
            return newDate
        })
    }

    const onCalendarNextClick = () => {
        setViewDate((state: any)=>{
            const newDate = dayjs(state).add(1, "month")
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
        <Calendar loading={viewLoading} viewMonth={viewDate.month()+1} viewYear={viewDate.year()} postInfo={monthlyPost} onCalendarPrevClick={onCalendarPrevClick} onCalendarNextClick={onCalendarNextClick} onEmptyClick={onEmptyClick}/>
    </>


}

export default CalendarContainer