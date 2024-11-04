  import React, { useEffect, useState } from 'react'
  import { Socket, io } from 'socket.io-client'
  import MessageInput from './MessageInput'
  import Message from './Message';

  const socket : Socket = io("http://127.0.0.1:3001");
  // socket.connect();

  const MessageBox = () => {
    const [messages,setMessage] = useState<string[]>([]);
    useEffect(()=>{
      console.log('receiveMessage')
      socket.on('receiveMessage', data => {
        setMessage(prevMessages => [...prevMessages,data.data.message]);
      })
      return ()=>{
        socket.off('receiveMessage');
      }
    },[socket])
    
    useEffect(()=>{
      console.log(messages)
    },[messages]);



    return (
      <article className='  flex flex-col w-[70%] h-full border rounded-lg px-6'>
          <div className='message-box min-h-[90%]'>
              {
                messages?.map( (message: string,index: number) => 
                  (<Message message={message} key={`message_${index.toString()}`}/>)
                )
              }
          </div>

          <MessageInput socket={socket}/>
      </article>
    )
  }

  export default MessageBox
