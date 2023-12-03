import React, { useState } from 'react'
import './pagefour.css'

export default function StepFour({billTime, plan, price}) {
  // const [price, setPrice] = useState(0)
  return (
    <div className='step-four'>
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming</p>

      <div className='account-info'>
        <div className="plan">
          <div className="plan-info">
            {plan}({billTime})
            <a href='/steptwo'>Change</a>
          </div>
          
          <div className="plan-price">
            ${price}/yr
          </div>
        </div>
        
        
        <hr/>
        <div className='add-ons'>
          <div className="desc">
            Online service
            Larger storage
          </div>
          <div className="price">
            +$10/yr
            +$20/yr
          </div>
        </div>
      </div>
      <div className="total">
        <div className="tot-desc">
          Total (per month)
        </div>
        <div className="tot-price">
          +12/mo
        </div>
      </div>
        
      
      <div className='two-buttons-4'>
        <a href='/stepthree'>
          <button className='back-four'>Go back</button>
        </a>
        <a href='/stepfive'>
          <button className='confirm-four'>Confirm</button>
        </a>
      </div>

    </div>
  )
}
