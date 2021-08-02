import {AuthAPI} from "../api/AuthAPI"


export const Init = {
    start: () => {


        return new Promise(async (resolve, reject)=>{
            try{
                //ACCESS TOKEN 을 통한 접근
                console.log("start")
                const VAT = localStorage.getItem("VAT")

                if(!VAT) throw Error()

                const valid = await AuthAPI.tockenValidation(VAT)
                console.log(valid)
                
                resolve(true)
            }catch(e){
                //Refresh 요청
                const VRT = localStorage.getItem("VRT")
                if(!VRT) throw Error()
                await AuthAPI.refreshToken(VRT).then((res)=>{
                    localStorage.setItem("VAT",res.access_token)
                    localStorage.setItem("VRT",res.refresh_token)
                    resolve(true)
                }).catch(()=>{
                    //Refresh 만료
                    throw new Error()

                })


            }
        })

    }
}