import axios from "axios";

const api = `${process.env.NEXT_PUBLIC_API_ROUTE}/contact`;

export const sendContactMail = async (sender:string, name:string, content:string)=>{
    const data = {
        sender,
        name,
        content,
    }

    try{
        const res = await axios({
            method: 'post',
            url: api,
            headers:{
                'Content-Type': 'application/json'
            },
            data
        })
        return Promise.resolve(res);
    }
    catch(error){
        return Promise.reject(error)
    }
}