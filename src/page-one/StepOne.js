import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import './pageone.css'

export default function StepOne() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")



  
  return (
    <div className='step-one'>
      <form>
        <div className='title'>Personal Info</div>
        <div className='desc'>Please provide your name, email address, and phone number</div>
        <label for='name-field'>Name</label>
        <input 
          type='text' 
          className='name-field' 
          // required
          errorMessage = 'This field is required'
          id='username' onChange={(e) => setUsername(e.target.value)}
          />
        <div className='error'>This field is required</div>
        <label for='email-field'>Email Adress</label>
        <input 
          type='email' 
          className='email-field' 
          id='email' 
          errorMessage = 'Please enter a valid email'
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          // required
          onChange={(e) => setEmail(e.target.value)}></input>
        <div className='error'>This field is required</div>
        <label for='phone-field'>Phone Number</label>
        <input 
          type='tel' 
          className='phone-field' 
          name='phone' 
          // required
          errorMessage = 'Please enter a valid phone number'
          pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
          onChange={(e) => setPhone(e.target.value)}></input>
        <div className='error'>This field is required</div>
        <a href='/steptwo/'>
          <button className='button-page-1'>Next Step</button>
        </a>
        
      </form>
      
    </div>
  )
}
