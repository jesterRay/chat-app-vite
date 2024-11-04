 import React from 'react'
 import Contact from './Contact'
 const ContactList = ({contacts}: {contacts : any}) => {
   return (
     <aside className='w-[30%]'>
        {
          contacts ? contacts.map((contact:any,index:number) => {
            <Contact contact={contact} key={`contact_${index}`}/>
          })
          : <span>No contact Added</span>
        }
     </aside>
   )
 }
 
 export default ContactList
 