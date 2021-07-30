import {HostUrl} from "../.config/constant";

export const EmailAPI = {
    emailVerification : async (email: string): Promise<any> => {
        return fetch(HostUrl+"/email/verificationCode",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                email : email
            })
        }).then(async (res)=>{
            if(!res.ok) throw await res.json()
            return res
        })
    },

    verifyCode : async (email : string, code: string): Promise<any> => {
        return fetch(HostUrl+"/email/verifyCode",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                email : email,
                verificationCode : code
            })
        }).then(async (res)=>{
            if(!res.ok) throw await res.json()
            return res
        })
    }

}