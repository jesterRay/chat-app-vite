import React from 'react'
import MessageBox from './MessageBox';
import ContactList from './ContactList';
import ChatNav from './ChatNav';
const Chat = () => {
  return (
    <section className='flex items-center justify-center h-[80vh]'>
        <div className='min-w-[50vw] flex flex-col h-full bg-white px-8 py-6 rounded-lg shadow'>
            <ChatNav/>
            <div className='flex mt-5 h-full '>
                <ContactList/>
                <MessageBox/>
            </div>
        </div>

    </section>
  )
}

export default Chat
