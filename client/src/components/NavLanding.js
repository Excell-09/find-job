import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '../assets';

const NavLanding = () => {
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 10) {
        setScroll(true);
      } else {
        setScroll(false)
      }
    });
  }, []);

  return (
    <header>
      <nav className={` ${scroll && 'bg-slate-700 shadow-lg'} transition-all duration-200 p-4 flex justify-between items-center fixed top-0 left-0 w-full`}>
        <div className='flex-1'>
          <img src={Logo} alt='logo' className='w-10 h-10' onClick={() => navigate('/landing')} />
        </div>
        <div className='flex justify-end items-center flex-1 space-x-3 whitespace-nowrap'>
          <Link className='text-indigo-500 hover:text-indigo-700' to={'/login'}>
            Login
          </Link>
          <Link
            className=' text-indigo-500 border-2 px-2 py-1 rounded-md border-blue-600 bg-blue-300 bg-opacity-20 hover:text-indigo-700 hover:bg-opacity-90 transition-all duration-200'
            to={'/register'}>
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavLanding;
