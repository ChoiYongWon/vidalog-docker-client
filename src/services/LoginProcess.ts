import {AuthAPI} from "../api/AuthAPI";
import jwt from "jsonwebtoken"

//TODO 로그인 프로세스

export const LoginProcess = (id: string, pw: string) => {
    return AuthAPI.login(id, pw).then(res=>{
        localStorage.setItem("VAT",res.access_token)
        localStorage.setItem("VRT",res.refresh_token)

        const {iat, exp, ...rest} = jwt.decode(res.access_token) as jwt.JwtPayload
        return rest
    })
}