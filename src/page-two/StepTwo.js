import React from 'react'
import '../index.css'
import monthlyOrange from '../assets/images/icon-arcade.svg'
import monthlyAdvanced from '../assets/images/icon-advanced.svg'
import monthlyPro from '../assets/images/icon-pro.svg'
import {useState, useEffect} from 'react'
import './pagetwo.css'

export default function StepTwo({setBillTime, setPlan, plan, billTime, setPrice, price}) {
  // const [billTime, setBillTime] = useState("monthly")
  const [planPrice, setPlanPrice] = useState(0)
  const [priceArcade, setPriceArcade] = useState(9)
  const [priceAdvanced, setPriceAdvanced] = useState(12)
  const [pricePro, setPricePro] = useState(15)

  const [chosenPrice, setChosenPrice] = useState(0)
  

  const isChecked = e => {
    if (e.target.checked){
      setBillTime("yearly")
      setPriceArcade(90)
      setPriceAdvanced(120)
      setPricePro(150)
    } else {
      setBillTime("monthly")
      setPriceArcade(9)
      setPriceAdvanced(12)
      setPricePro(15)
    }
  }

  // const handleSubmit = e =>{
  //   // e.preventDefault()
  //   // console.log(priceArcade)
  //   getData(billTime)
  // }

  function whichPlan(){
    if (document.getElementById("arcade-plan").checked) {
      setPlan('arcade')
    }
    if (document.getElementById("advanced-plan").checked) {
      setPlan('advanced')
    }
    if (document.getElementById("pro-plan").checked) {
      setPlan('pro')
    }

    if (billTime === 'monthly'){
      if (plan === 'arcade'){
        setPrice(9)
      }
      if (plan === 'advanced'){
        setPrice(12)
      }
      if (plan === 'pro'){
        setPrice(15)
      }
    }
    if (billTime === 'yearly'){
      if (plan === 'arcade'){
        setPrice(90)
      }
      if (plan === 'advanced'){
        setPrice(120)
      }
      if (plan === 'pro'){
        setPrice(150)
      }
    }

    console.log('plan is:', plan)
    console.log('price is', price)
  
  }
  
  return (
    <form className='step-two' >
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing</p>
      <div className='plan-choices'>
        <input type="radio" id='arcade-plan' name='plan' className='radio'/>
        <label for='arcade-plan' id='arcade-plan' className='arcade-plan' onClick={whichPlan}>
          <img src={monthlyOrange} alt='arcade-icon'/>
          <h2>Arcade</h2>
          <div className='price'>${priceArcade}/hr</div>
        </label>

        <input type="radio" id="advanced-plan" name='plan' className='radio'/>
        <label for="advanced-plan" id='advanced-plan' className='advanced-plan' onClick={whichPlan}>
          <img src={monthlyAdvanced} alt='advanced-icon'/>
          <h2>Advanced</h2>
          <div className='price'>${priceAdvanced}/hr</div>
        </label>
        
        <input type="radio" id="pro-plan" name='plan' className='radio'/>
        <label for="pro-plan" id='pro-plan' className='pro-plan' onClick={whichPlan}>
          <img src={monthlyPro} alt='arcade-icon'/>
          <h2>Pro</h2>
          <div className='price'>${pricePro}/hr</div>
        </label>


       
      </div>

      <div className='toggle'>
        <h3 className='monthly'>Monthly</h3>
        <label className="switch">
          <input type="checkbox" onChange={isChecked} className='checkbox'/>
            <span className="slider"></span>
        </label>
        <h3 className='yearly'>Yearly</h3>
      </div>
      
      <div className='two-buttons-2'>
        <a href='/stepone'>
          <button className='back-btn-2'>Go back</button>
        </a>
        <a href='/stepthree'>
          <button className='next-btn-2'>Next Step</button>
        </a>
      </div>
      
    </form>
  )
}
