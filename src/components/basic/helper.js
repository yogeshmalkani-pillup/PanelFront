import { request } from "../../axiosInstance"

export const calculate = async ({payload}) =>{
    try {
        let reponse = await request({
            method: "POST",
            url: '/basic',
            data: payload
        })
        if(reponse.data.success){
            return reponse.data.data;
        }
        else{
            return null;
        }
    } catch (error) {
        return null;
    }
}