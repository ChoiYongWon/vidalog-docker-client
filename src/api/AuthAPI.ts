import {clientInfo, HostUrl} from "../.config/constant";

export const AuthAPI = {
    idValidation : async (id: string): Promise<any>=> {
        return fetch(HostUrl+"/auth/idValidation?id="+id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(async res=>{
            if(!res.ok) throw res
            return res
        })
    },

    login : async (id: string, password: string): Promise<any>=> {
        return fetch(HostUrl+"/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id : id,
                password : password
            })

        }).then(async res=>{
            if(!res.ok) throw res
            return res
        })
    },

    register : async (id: string, email: string, password: string): Promise<any>=> {
        return fetch(HostUrl+"/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id : id,
                email : email,
                password : password,
                nickname : ""
            })

        }).then(async res=>{
            if(!res.ok) throw res
            return res
        })
    },

    tockenValidation : async (id: string): Promise<any>=> {
        return fetch(HostUrl+"/auth/isATValid", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization" : "Bearer "+localStorage.getItem("VAT")
            }
        }).then(async res=>{
            if(!res.ok) throw res
            return res
        })
    },

    refreshToken : async (refreshToken: string | null): Promise<any>=> {
        if(!refreshToken) return
        return fetch(HostUrl+"/auth/refreshToken", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization" : "Basic "+Buffer.from(clientInfo.id+":"+clientInfo.secret, "utf8").toString("base64")
            },
            body: JSON.stringify({
                refresh_token: refreshToken
            })
        }).then(async res=>{
            if(!res.ok) throw res
            return res
        })
    },
    
}