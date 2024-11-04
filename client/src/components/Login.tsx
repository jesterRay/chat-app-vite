import React, { useState } from 'react'
import Alert from './Alert';
import { AlertDetail } from './Alert';
import loginApi from '../apis/loginApi';
import { useNavigate } from 'react-router-dom';
import Spinner from './Spinner';
const Login = () => {
    const navigate = useNavigate();
    const [loading,setLoading] = useState<boolean>(false);
    const [alertDetail,setAlertDetail] = useState<AlertDetail>({
      show: false,
      type:'none',
      msg: ''
    });
    const [email,setEmail] = useState<string>('');

    const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        if(!email){
          setAlertDetail({
            show: true,
            type: 'error',
            msg: "Invalid Email!!!"
          });
          setLoading(false);
          return;
        }
        const [mailSent,msg] = await loginApi({email});
        if(mailSent){
          // console.log('mail Sent')
          navigate('/otp/verify',{state:{email: email}});
          setLoading(false);
          return;
        }
        setLoading(false);
        setAlertDetail({show: true, msg: msg, type: "error"});

    }

  return (
    <section className='flex items-center justify-center h-[70vh]'>
      <Alert alert={alertDetail} setAlert={setAlertDetail}/>
      <form onSubmit={handleSubmitForm} className='flex gap-6 p-12 bg-white text-neutral rounded-lg shadow-lg w-max'>
        <img src="/assets/images/mail.svg" alt="" className=' w-[60%] pe-4'/>
        <div className='flex flex-col items-start justify-center'>
          <h1 className='text-2xl font-semibold underline text-dark mb-4 text-nowrap'>Let's Get You Started</h1>
          <div className=' flex flex-col gap-2 focus-within:text-primary'>
              <label htmlFor="email" className=''>Email</label>
              <input type="email" id='email' name='email' className=' transition-all duration-300 text-dark rounded-lg py-2 px-3 focus:border focus:border-dark bg-secondary focus:bg-white outline-none font-thin' value={email} 
              onChange={(e)=>{setEmail(e.target.value);}}/>
          </div>
      
          <div>
              <button type='submit' className='rounded-lg px-5 mt-4 py-2 font-semibold text-md shadow shadow-primary text-secondary bg-dark'>
                {
                  loading  ? <Spinner strokeColor={"text-primary"} loaderColor={"text-secondary"}/> : "Start" 
                }</button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Login
