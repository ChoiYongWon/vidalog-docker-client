import {HostUrl} from "../.config/constant";

export const PostAPI = {
    uploadPost : (imageBody: any): Promise<any> => {
        return fetch("http://172.28.18.82:3000/post/uploadPost",{
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

}