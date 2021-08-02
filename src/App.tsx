import React, { useEffect, useState } from 'react';
import { RouterIndex } from "./routes/index"
import {createGlobalStyle} from "styled-components"
import { Init } from "./.start/init"
import {recoil_Auth} from "./recoils/index";
import {useSetRecoilState} from "recoil";
import { Auth, Role } from "./types/Auth";
import {useHistory} from "react-router-dom"

const GlobalStyle = createGlobalStyle`
  html, body {
    width : 100%;
    height : 100%;
    padding : 0;
    margin : 0;
    
  }
  
  input, textarea, button {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius : 0;
    -webkit-border-radius : 0;
    -moz-border-radius : 0;
  }
`

function App() {

    const setAuthentication = useSetRecoilState(recoil_Auth.authenticate)
    const setRole = useSetRecoilState(recoil_Auth.role)
    const [initialized, setInitialized] = useState(false)
    const history = useHistory()

    //마운팅 첫 단계에 start 호출후 initialized true로 설정
    useEffect(()=>{
        Init.start().then(()=>{
            setAuthentication(Auth.LOGIN)
            setRole(Role.USER)
        }).then(()=>setInitialized(true)).catch(()=>{
            history.push("auth")
        })
        // eslint-disable-next-line
    },[])

  return (
      //start가 실행되기 전까진 렌더링 안됨
      initialized ?
          <>
              <GlobalStyle/>
              <RouterIndex/>
          </> : null


  );
}

export default App;
