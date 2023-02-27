import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import { NAVLINK } from '../utils/navlink';
import { AiOutlineEdit } from 'react-icons/ai';
import { IoIosAddCircleOutline } from 'react-icons/io';

const SmallHeader = () => {
  const { user, logoutUser, clearEdit } = useAppContext();
  const { isEditing, setIdJob } = useAppContext();
  const [navlink, setNavLinks] = useState([]);

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

  return (
    <div className='md:hidden z-50 fixed bottom-0 left-0 w-full px-3 shadow bg-white py-2 pt-4'>
      <div className='flex justify-around items-center'>
        {NAVLINK.map((item, i) => {
          return (
            <NavLink className={`flex flex-col items-center`} key={i} to={item.to}>
              <item.logo className='text-2xl' />
              <p>{item.label}</p>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default SmallHeader;
