import React from 'react'
import { Link } from 'react-router-dom'



const Contact = ({contact} : {contact :any}) => {
  return (
    <li className='p-0 m-0 box-border'>
      <Link to={'#'}>
        <div className='flex flex-col gap-1'>
            <span>{contact.email}</span>
            <small className=' text-green-500'>{contact.status === 1 ? "Online"  : ''}</small>
        </div>
      </Link>
    </li>
  )
}

export default Contact
