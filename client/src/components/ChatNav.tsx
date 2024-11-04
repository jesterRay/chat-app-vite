import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const ChatNav = () => {
  return (
    <header className='flex gap-3 justify-between items-center w-full'>
        <SearchBar/>
        <div className='flex gap-3'>
            <Link to={'/'} className='flex cursor-pointer flex-col items-center justify-between transition-all duration-300 text-neutral hover:text-dark hover:drop-shadow'>
                    <i className="fa-solid fa-user-plus"></i>
                    <span className=' tracking-wide font-medium'>Add</span>
            </Link>
            <Link to={'/'} className='flex  cursor-pointer flex-col items-center justify-between transition-all duration-300 text-neutral hover:text-dark hover:drop-shadow'>
                <i className="fa-solid fa-user-group"></i>
                <span className=' tracking-wide font-medium'>Group</span>
            </Link>
        </div>
    </header>
  )
}

export default ChatNav
