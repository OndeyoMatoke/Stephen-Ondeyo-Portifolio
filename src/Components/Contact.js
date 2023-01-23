import React, { useState } from 'react'




export default function Contact() {

  const [inputs, setInputs] = useState({
    name: '',
    subject: '',
    email: '',
    message: ''
  })

  const onSubmit = (event)=>{
    event.preventDefault()
  }
    
  

  const handleChange = (event)=>{
      setInputs({
        ...inputs,
        [event.target.name]: event.target.value
      });
    } 
  
  


  return (
    
    <form onSubmit={onSubmit} className='myForm'>
      <h2>Get in touch with me by <br/>filling the form below</h2>
      <label>Name: <br/>
        <input
           type="text"
           name="name"
           value={inputs.name}
           onChange={handleChange}          
          required
        />
      </label>
      <br/>
      <br/>
      <label>Subject: <br/>
        <input
           type="text"
           name="subject"
           value={inputs.subject}
           onChange={handleChange}
          required
        />
      </label>
      <br/>
      <br/>
      <label>Email: <br/>
        <input
           type="text"
           name="email"
           value={inputs.email}
           onChange={handleChange}
          required
        />
      </label>
      <br/>
      <br/>
      <label>Leave me a message: <br/>
        <textarea
           type="text"
           name="message"
           value={inputs.message}
          onChange={handleChange}
          required
        />
      </label>
      <br/>
      <br/>
      <button className='sabmit' type='submit'>Submit</button>

    </form>
  )
}
