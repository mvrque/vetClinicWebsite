import React from 'react'
import { Link } from 'react-router-dom'
import './Specific.css'

function Specific() {
  return (
    <div className='specific-container'>
        <a href="https://www.specific.ee" target="_blank" rel="noreferrer">
        <img className='specific-image' src='/specificReklaam.jpg' />
        </a>
    </div>
  )
}

export default Specific