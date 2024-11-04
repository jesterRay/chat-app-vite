import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
    return (
    <nav className='flex justify-between items-center py-3 px-6 '>
        <figure className='flex flex-col justify-center items-center'>
            <img src="/vite.svg" alt="profile pic" className=' object-fill rounded-full w-[30px] h-[30px]' />
            <figcaption className=' text-nowrap text-sm text-dark'>Name Of Person</figcaption>
        </figure>
        <div className='flex items-center justify-end gap-12'>
            
            <Link to={'/login'} className=' transition-all duration-300 flex items-center gap-2 border border-dark hover:bg-dark hover:border-primary text-primary rounded-lg px-3 py-2'>
                <span className=' tracking-wide font-medium'>Login</span>
                <i className="fa-solid fa-right-to-bracket"></i>
            </Link>
        </div>
    </nav>
    )
}

export default Nav
