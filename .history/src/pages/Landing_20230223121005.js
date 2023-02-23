import React from 'react'
import { Logo } from '../assets'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
      <header>
        <nav className='px-2 py-4 flex justify-between align-'>
          <div className="">
            <img src={Logo} alt='logo' className='w-12 h-12' />
          </div>
          <div className='flex justify-between items-center'>
            <Link to={'/login'}>Login</Link>
            <Link to={'/register'}>Get Started</Link>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Landing
