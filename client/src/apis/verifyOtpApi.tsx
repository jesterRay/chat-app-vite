import axios from "../utils/axios";
const verifyOtpApi = async ({otp,email} : {otp: number,email: string}): Promise<[boolean,string]> => {
  let verified: boolean = false;
  let msg: string = '';

  try {
        const res = await axios.post('/api/auth/otp',{otp,email});
        verified = res.status == 200 ?   true : false;
        msg = res.data.message;
    } catch (error: any) {
        verified = false;
        msg = error;
        console.log(error);
    }

  return [verified,msg];

}

export default verifyOtpApi
