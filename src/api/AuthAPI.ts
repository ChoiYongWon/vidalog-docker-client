import {HostUrl} from "../.config/constant";

export const AuthAPI = {
    idValidation : async (id: string): Promise<any>=> {
        return fetch(HostUrl+"/auth/idValidation?id="+id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(async res=>{
            if(!res.ok) throw new Error()
            return await res.json()
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
            if(!res.ok) throw new Error()
            return await res.json()
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
            if(!res.ok) throw new Error()
            return await res.json()
        })
    }
}