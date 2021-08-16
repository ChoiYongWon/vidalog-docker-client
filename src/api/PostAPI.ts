import {HostUrl} from "../.config/constant";

export const PostAPI = {
    uploadPost : (imageBody: any): Promise<any> => {
        return fetch(HostUrl+"/post/uploadPost",{
            method : "POST",
            headers : {
               "Authorization" : "Bearer "+localStorage.getItem("VAT")
            },
            body : imageBody
        }).then( (res)=>{
            if(!res.ok) throw res
            return res
        })
    },

    getPostedDateByYearFromNow: (): Promise<any> => {
        return fetch(HostUrl+"/post/getPostedDateByYearFromNow",{
            method : "GET",
            headers : {
                "Authorization" : "Bearer "+localStorage.getItem("VAT")
            }
        }).then( (res)=>{
            if(!res.ok) throw res
            return res
        })
    }

}
