import React from 'react'
import { Logo } from '../assets'

const Landing = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="">
            <img src={Logo} alt='logo' className='w-14 h-14' />
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Landing
