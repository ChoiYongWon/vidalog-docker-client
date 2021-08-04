import React from "react"
import styled from "styled-components"
import LogoImg from "../../img/logo.png"
import OutsideClickHandler from 'react-outside-click-handler';
import { MdSearch, MdPersonOutline } from "react-icons/md";

const HeaderComponent = styled.header`
  position: sticky;
  width : 1400px;
  margin : 0 auto;
  height : 64px;
  background : #ffffff;
  display : flex;
  box-sizing: border-box;
  //box-shadow: rgb(0 0 0 / 10%) 0px 10px 10px;
  align-items: center;
  justify-content: space-between;
  
  @media(max-width: 1400px){
    width : 900px;
  }

  @media(max-width: 900px){
    width : 100%;
    padding : 0 2rem;
  }
  
  //@media(max-width: 500px){
  //  display : none;
  //}
`

const Logo = styled.img`
  height : 90%;
  width : auto;
  user-select: none;
`

const NavWrapper = styled.div`
  display : flex;
  gap : 2rem;
  @media(max-width: 900px){
    gap : 1rem;

  }
`

const SearchWrapper = styled.div`
  cursor: pointer
`

const UserIconWrapper = styled.div`
  position: relative;
  cursor: pointer;
`

type UserIconMenuWrapperType = {
    show:boolean
}

const UserIconMenuWrapper = styled.ul`
  position: absolute;
  right: 0;
  top: calc( 100% + 0.5rem);
  display : ${ (props:UserIconMenuWrapperType) => props.show ? "block;":"none;"}
  box-shadow: rgb(0 0 0 /10%) 0px 0px 8px;
  padding : 0;
  margin : 0;
`

const UserIconMenu = styled.li`
  width: 150px;
  padding : 0.75rem;
  box-sizing: border-box;
  background: #ffffff;
  list-style: none;
  display : flex;
  align-items: center;
  font-family: 'Noto Sans KR', sans-serif;
  margin: 0;
  cursor: pointer;
  &:hover{
    background: #fafafa;
  }
`

type Props = {
    onClickUserIcon: ()=>void,
    onCloseUserIcon: ()=>void,
    menuShow: boolean,
    menu: string[],
    menuOnClicks: (()=>void)[]

}

const Header = (props:Props) => {

    return (
        <HeaderComponent>
            <Logo src={LogoImg}/>
            <NavWrapper>
                <SearchWrapper>
                    <MdSearch size={36} color={"#9a9a9a"}/>

                </SearchWrapper>

                <UserIconWrapper onClick={props.onClickUserIcon}>
                    <MdPersonOutline size={36} color={"#9a9a9a"}/>
                    <OutsideClickHandler onOutsideClick={props.onCloseUserIcon}>
                        <UserIconMenuWrapper show={props.menuShow}>
                            {
                                props.menu.map((i,index)=><UserIconMenu key={index} onClick={props.menuOnClicks[index]}>{i}</UserIconMenu>)
                            }
                        </UserIconMenuWrapper>
                    </OutsideClickHandler>

                </UserIconWrapper>

            </NavWrapper>
        </HeaderComponent>
    )
}

export default Header