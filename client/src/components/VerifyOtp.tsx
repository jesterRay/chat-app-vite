import React, { useState } from 'react'
import Alert from './Alert';
import { AlertDetail } from './Alert';
import { useLocation, useNavigate } from 'react-router-dom';
import Spinner from './Spinner';
import verifyOtpApi from '../apis/verifyOtpApi';

const VerifyOtp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {email}  = location.state;
    const [otp,setOtp] = useState<number>(0);
    const [loading,setLoading] = useState<boolean>(false);

    const [alertDetail,setAlertDetail] = useState<AlertDetail>({
        show: false,
        type:'none',
        msg: ''
      });


      const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('verify otp');
        setLoading(true);
        let [verified, msg] = await verifyOtpApi({otp,email});
        if(verified){
          setLoading(false);
          navigate('/chat');
          return;
        }
        setAlertDetail({show:true,type:'error',msg:msg});
        setLoading(false);
      }


    return (
        <section className='flex items-center justify-center h-[70vh]'>
          <Alert alert={alertDetail} setAlert={setAlertDetail}/>
          <form onSubmit={handleSubmitForm} className='flex gap-6 p-12 bg-white text-neutral rounded-lg shadow-lg w-max'>
            <img src="/assets/images/otp.svg" alt="" className=' w-[60%] pe-4'/>
            <div className='flex flex-col items-start justify-center'>
              <h1 className='text-2xl font-semibold text-dark mb-4'>Verify Your 5-digit OTP</h1>
              <div className=' flex flex-col gap-2 focus-within:text-primary'>
                  <label htmlFor="otp" className=''>Enter Your OTP</label>
                  <input type="number" id='otp' name='otp' className=' transition-all duration-300 text-dark rounded-lg py-2 px-3 focus:border focus:border-dark bg-secondary focus:bg-white outline-none font-thin' value={otp}
                   onChange={(e) => {setOtp(parseInt(e.target.value));}}/>
              </div>
          
              <div>
                  <button type='submit' className='rounded-lg px-5 mt-4 py-2 font-semibold text-md shadow shadow-primary text-secondary bg-dark
                     tracking-wider transition-all duration-300 hover:scale-105 active:scale-90'>{
                        loading  ? <Spinner strokeColor={"text-primary"} loaderColor={"text-secondary"}/> : "Verify"  
                     }</button>
              </div>
            </div>
          </form>
        </section>
      )
}

export default VerifyOtp

