import React, { useState } from 'react'
import {Socket} from 'socket.io-client'



const MessageInput = ({socket} : {socket: Socket}) => {

  const [message,setMessage] = useState<string>('');

  const  handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    socket.emit('sendMessage',{message: message});
    setMessage('');
  }

  return (
    <div className='w-full h-[10%] flex items-center justify-center'>
        <form onSubmit={handleFormSubmit} className=' w-full flex justify-around'>

            <input type="text" placeholder='Enter Message...'
             className='w-[80%] focus:outline-none rounded-lg py-2 px-4 focus:bg-none focus:border bg-neutral  border-neutral placeholder:text-gray-200 text- '
             value={message}
             onChange={(e) => {setMessage(e.target.value)}}/>
            <button type='submit' className=''>
                <i className="fa-solid fa-check bg-green-500 text-dark rounded-full p-2"></i>
            </button>
        </form>
    </div>
  )
}

export default MessageInput
