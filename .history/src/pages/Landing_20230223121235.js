import React from 'react'
import { Logo } from '../assets'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
      <header>
        <nav className='p-4 flex justify-between items-center bg'>
          <div className="flex-1">
            <img src={Logo} alt='logo' className='w-10 h-10' />
          </div>
          <div className='flex justify-end items-center flex-1 gap-3 whitespace-nowrap'>
            <Link to={'/login'}>Login</Link>
            <Link to={'/register'}>Get Started</Link>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Landing
