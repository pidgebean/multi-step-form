import React from 'react'
import {useState, useEffect} from 'react'
import './pagethree.css'

export default function StepThree() {
  // let addOns = []
  const [checkOne, setCheckOne] = useState(false)
  const [checkTwo, setCheckTwo] = useState(false)
  const [checkThree, setCheckThree] = useState(false)


  useEffect(() => {

  }, [checkOne, checkTwo, checkThree])

  return (
    <div className='step-three'>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhancce your gaming experience</p>

      {/* Online service choice */}
      <label className='choice'>
        <div className='check'>
          <input 
            type='checkbox'  
            // checked={checkedState[0]}
            // onChange={() => handleOnChange(0)}
          ></input>
          <span class="checkmark"></span>
        </div>
        
        <div className='desc'>
          <div className='title'>Online service</div>
          <div className='comment'>Access to multiplayer games</div>
        </div>
        <div className='price-1'>+1/mo</div>
      </label>

      {/* Larger storage choice */}
      <label className='choice'>
        <div className='check'>
          <input 
            type='checkbox'  
            value={"larger storage"}
            // checked={checkedState[1]}
            // onChange={() => handleOnChange(0)}
          ></input>
          <span class="checkmark"></span>
        </div>
        
        <div className='desc'>
          <div className='title'>Larger storage</div>
          <div className='comment'>Extra 1TB of cloud save</div>
        </div>
        <div className='price-2'>+$2/mo</div>
      </label>


      {/* Customize profile choice */}
      <label className='choice'>
        <div className='check'>
          <input 
            type='checkbox'  
            value={"customize profile"}
            // checked={checkedState[2]}
            // onChange={() => handleOnChange(0)}
          ></input>
          <span class="checkmark"></span>
        </div>
        
        <div className='desc'>
          <div className='title'>Customizable profile</div>
          <div className='comment'>Custome theme on your profile</div>
        </div>
        <div className='price-3'>+$2/mo</div>
      </label>

      <div className='two-buttons-3'>
        <a href='/steptwo'>
          <button className='back-btn-3'>Go back</button>
        </a>
        <a href='/stepfour'>
          <button className='next-btn-3'>Next Step</button>
        </a>
      </div>
    </div>
  )
}
