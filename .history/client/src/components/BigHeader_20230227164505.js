import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { NAVLINK } from '../utils/navlink';
import { Logo } from './../assets/index';
import { useAppContext } from '../context/appContext';
import { AiOutlineEdit } from 'react-icons/ai';
import { IoIosAddCircleOutline } from 'react-icons/io';

const BigHeader = () => {
  const { user, logoutUser, clearEdit } = useAppContext();
  const { isEditing, setIdJob } = useAppContext();
  const [navlink, setNavLinks] = useState([...NAVLINK]);

  useEffect(() => {
    const updatedNavLinks = [...NAVLINK];
    if (isEditing) {
      updatedNavLinks[1].logo = AiOutlineEdit;
      updatedNavLinks[1].label = 'Edit';
    }
    if (!isEditing) {
      updatedNavLinks[1].logo = IoIosAddCircleOutline;
      updatedNavLinks[1].label = 'Create';
    }
    setNavLinks(updatedNavLinks);
    return;
  }, [isEditing, setIdJob, clearEdit]);

  const navigate = useNavigate();
  const [dropDown, setDropDown] = useState(false);

  return (
    <>
      <header className='w-full fixed flex justify-between bg-white p-4 z-40'>
        <div className='flex items-end space-x-1 cursor-pointer' onClick={() => navigate('/')}>
          <img src={Logo} alt='logo' className='h-auto w-[2.5rem]' />
          <h1 className='font-semibold text-xl whitespace-nowrap '>ind Job</h1>
        </div>
        <button className='relative z-50' type='button'>
          <p className='text-lg font-semibold cursor-pointer bg-indigo-500 shadow rounded-full w-[120px] px-4 py-1 text-white' onClick={() => setDropDown(!dropDown)}>
            {user?.name || 'unknown'}
          </p>
          <div
            className={` w-[120px] transition-all duration-200 font-semibold cursor-pointer shadow rounded-full px-4 py-1 absolute bg-red-500 translate-y-1 text-white ${
              dropDown ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => logoutUser()}>
            Log Out
          </div>
        </button>
      </header>
      <aside className='hidden md:flex fixed min-h-screen flex-col bg-white left-0 top-0 w-[180px] z-50 shadow-md'>
        <div className='flex items-end space-x-1 p-3 cursor-pointer' onClick={() => navigate('/')}>
          <img src={Logo} alt='logo' className='h-auto w-[2.5rem]' />
          <h1 className='font-semibold text-xl '>ind Job</h1>
        </div>
        <div>
          {navlink.map((item, i) => (
            <NavLink className={'hover:bg-gray-300 py-2 pl-3 flex items-center space-x-1 text-xl font-semibold'} key={i} to={item.to}>
              <item.logo />
              <p>{item.label}</p>
            </NavLink>
          ))}
        </div>
      </aside>
    </>
  );
};

export default BigHeader;
