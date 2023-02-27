import { AiOutlineHome, AiOutlineHistory, AiOutlineEdit } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { useAppContext } from '../context/appContext';

const NavLinkGenerate = () => {
  const { isEditing } = useAppContext();
  return [
    { logo: AiOutlineHome, to: '/', label: 'Home' },
    { logo: isEditing ? AiOutlineEdit : IoIosAddCircleOutline, to: '/create', label: isEditing ? 'Edit' : 'Create' },
    { logo: CgProfile, to: '/update', label: 'Profile' },
    { logo: AiOutlineHistory, to: '/history', label: 'History' },
  ];
};

export const NAVLINK = NavLinkGenerate();
