import React from "react"
import HeaderContainer from "../../containers/Header/HeaderContainer";
import DateIndicator from "../../components/DateIndicator";
import HomeLayout from "../../layouts/Home";
import DateIndicatorLayout from "../../layouts/Home/DateIndicator";
import Text from "../../components/Text"

const Home = () =>{
    return (
        <>
            <HeaderContainer/>
            <HomeLayout>
                <DateIndicatorLayout>
                    <Text value={"365일 동안 총 5번의 일기를 쓰셨습니다."} size={"14px"} color={"#24292e"}/>
                    <DateIndicator dateBubble={[
                        "2021-8-1",
                        "2021-8-2",
                        "2021-8-3",
                        "2021-8-4",
                        "2021-8-5",
                        "2021-8-6",
                    ]}/>
                </DateIndicatorLayout>
            </HomeLayout>


        </>
    )
}

export default Home