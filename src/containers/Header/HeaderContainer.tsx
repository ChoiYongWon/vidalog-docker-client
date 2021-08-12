import React, {useState} from "react"
import Header from "../../components/Header";
import {LogoutProcess} from "../../services/LogoutProcess";
import {useResetRecoilState} from "recoil";
import {recoil_Auth, recoil_User} from "../../recoils";
import {useHistory} from "react-router-dom"

const HeaderContainer = () =>{

    const resetUser = useResetRecoilState(recoil_User.user)
    const resetAuth = useResetRecoilState(recoil_Auth.authenticate)
    const menu = ["로그아웃"]
    const menuOnClicks = [
        ()=>LogoutProcess().then(()=>{
            resetUser()
            resetAuth()
        })
    ]

    const [menuShow, setMenuShow] = useState(false)
    const history = useHistory()

    const onClickUserIcon = () => {
        setMenuShow((state)=>!state)
    }

    const onCloseUserIcon = () => {
        setMenuShow(false)
    }

    const editOnClick = () => {
        history.push("edit")
    }

    return (
        <Header
            menu={menu}
            menuOnClicks={menuOnClicks}
            menuShow={menuShow}
            onClickUserIcon={onClickUserIcon}
            onCloseUserIcon={onCloseUserIcon}
            editOnClick={editOnClick}
        />
    )

}

export default HeaderContainer