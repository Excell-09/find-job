import React from 'react'
import { Logo } from '../assets'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="">
            <img src={Logo} alt='logo' className='w-12 h-12' />
          </div>
          <div>
            <Link to={}/>
            <Link/>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Landing
