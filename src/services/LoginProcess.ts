import {AuthAPI} from "../api/AuthAPI";
import jwt_decode from "jwt-decode"
//TODO 로그인 프로세스
export const LoginProcess = (id: string, pw: string) => {
    AuthAPI.login(id, pw).then(res=>{
        localStorage.setItem("VAT",res.access_token)
        localStorage.setItem("VRT",res.refresh_token)
        // const {"user", ...rest} = jwt_decode(res.access_token)
        return 
    })
}