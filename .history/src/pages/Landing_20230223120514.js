import React from 'react'
import { Logo } from '../assets'

const Landing = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="">
            <img src={Logo} alt='logo' className='w-10 h-10' />
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Landing
