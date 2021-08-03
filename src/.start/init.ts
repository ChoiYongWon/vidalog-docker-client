import {AuthAPI} from "../api/AuthAPI"
import jwt from "jsonwebtoken"


export const Init = {
    start: () => {

        return new Promise(async (resolve, reject)=>{
            try{
                //ACCESS TOKEN 을 통한 접근
                const VAT = localStorage.getItem("VAT")
                if(!VAT) throw Error()
                await AuthAPI.tockenValidation(VAT)
                const {iat, exp, ...rest} = jwt.decode(VAT) as jwt.JwtPayload
                return resolve(rest)
            }catch(e){
                //Refresh 요청
                const VRT = localStorage.getItem("VRT")
                if(!VRT) return reject(false)
                await AuthAPI.refreshToken(VRT).then((res)=>{
                    localStorage.setItem("VAT",res.access_token)
                    localStorage.setItem("VRT",res.refresh_token)
                    return resolve(true)
                    }).catch(()=>{
                        console.log("catch")
                        //Refresh 만료
                        return reject(false)
                    })
            }
        })

    }
}