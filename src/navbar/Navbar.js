import React from 'react'
import sidebar from '../assets/images/bg-sidebar-desktop.svg'
import './navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        <img className='sidebar-pic' src={sidebar} alt="sidebar" />
      <a href='/stepone'>
        <button className='page-1'>
          <label className='circle-1'>1</label>
          <div className="page-desc">
            <div className="page-num">Step 1</div>
            <div className="page-title">YOUR INFO</div>
          </div>
        </button>
      </a>
      <a href='/steptwo'>
        <button className='two-btn'>
          <label className='circle-2'>2</label>
          <div className="page-desc">
            <div className="page-num">Step 2</div>
            <div className="page-title">SELECT PLAN</div>
          </div>
          
        </button></a>
      <a href='/stepthree'>
        <button className='three-btn'>
          <label className='circle-3'>3</label>
          <div className="page-desc">
            <div className="page-num">Step 3</div>
            <div className="page-title">ADD-ONS</div>
          </div>
          
        </button></a>
      <a href='/stepfour'>
        <button className='four-btn'>
          <label className='circle-4'>4</label>
          <div className="page-desc">
            <div className="page-num">Step 4</div>
            <div className="page-title">SUMMARY</div>
          </div>
          
        </button>
      </a>
    </div>
  )
}
