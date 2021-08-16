import React from "react"
import HeaderContainer from "../../containers/Header/HeaderContainer";
import HomeLayout from "../../layouts/Home";
import DateIndicatorLayout from "../../layouts/Home/DateIndicator";
import DateIndicatorContainer from "../../containers/DateIndicator/DateIndicatorContainer";

const Home = () =>{
    return (
        <>
            <HeaderContainer/>
            <HomeLayout>
                <DateIndicatorLayout>
                    <DateIndicatorContainer/>
                </DateIndicatorLayout>
            </HomeLayout>


        </>
    )
}

export default Home