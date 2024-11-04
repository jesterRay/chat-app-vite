import axios from "../utils/axios";


const loginApi = async ({email}: {email:string}): Promise<[boolean,string]> => {
    let mailSent = false;
    let msg = '';

    try {
        const res = await axios.post('/api/auth/login',{email});
        if(res.status === 200){
            mailSent = true;
            msg = res.data.msg;
        }else{
            mailSent = false;
            msg = res.data.msg;
        }
    } catch (error: any) {
        console.log(error);
        mailSent = false;
        msg = error;
    }
    
    return [mailSent,msg];

}


export default loginApi