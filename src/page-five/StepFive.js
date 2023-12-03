import React from 'react'
import checkmark from '../assets/images/icon-thank-you.svg'
import './pagefive.css'

export default function StepFive() {
  return (
    <div className='step-five'>
      <img src={checkmark} alt="checkmark" />
      <h3>Thank you!</h3>
      <p>Thanks for confirming your subscription! We hope you have
        fun using our platform. If you ever need support, please feel
        free to email us at support@loremgaming.com
      </p>
    </div>
  )
}
