import React from 'react';
import { Logo } from '../assets';
import { Link, useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <nav className='p-4 flex justify-between items-center bg-slate-800'>
          <div className='flex-1'>
            <img src={Logo} alt='logo' className='w-10 h-10' onClick={() => navigate('/landing')} />
          </div>
          <div className='flex justify-end items-center flex-1 gap-3 whitespace-nowrap'>
            <Link className=' text-indigo-500' to={'/login'}>
              Login
            </Link>
            <Link className=' text-indigo-500 border-2 px-2 py-1 rounded-md border-blue-600 bg-gray-300 bg-opacity-10 hover:text-indigo-700 hover:bg-opaci' to={'/register'}>
              Get Started
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Landing;
