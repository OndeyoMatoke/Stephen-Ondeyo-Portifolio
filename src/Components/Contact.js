import React, { useState } from 'react'




export default function Contact() {

  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')  
  

  const onSubmit = (event)=>{
    event.preventDefault()

    if (name&&subject&&email&&message) {
      console.log("name:", name, "\nsubject:", subject, "\nemail:", email, "\nmessage:", message)
    }
    
  }
  
  


  return (
    
    <form onSubmit={onSubmit} className='myForm'>
      <h2>Get in touch with me by <br/>filling the form below</h2>
      <label>Name: <br/>
        <input
           type="text"
           name="name"           
           onChange={e=>setName(e.target.value)}          
          required
        />
      </label>
      <br/>
      <br/>
      <label>Subject: <br/>
        <input
           type="text"
           name="subject"           
           onChange={e=>setSubject(e.target.value)}
          required
        />
      </label>
      <br/>
      <br/>
      <label>Email: <br/>
        <input
           type="text"
           name="email"
           onChange={e=>setEmail(e.target.value)}
          required
        />
      </label>
      <br/>
      <br/>
      <label>Leave me a message: <br/>
        <textarea
           type="text"
           name="message"
          onChange={e=>setMessage(e.target.value)}
          required
        />
      </label>
      <br/>
      <br/>
      <button className='sabmit' type='submit'>Submit</button>

    </form>
  )
}
