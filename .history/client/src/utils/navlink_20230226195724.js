import { AiOutlineHome, AiOutlineHistory } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { useAppContext } from '../context/appContext';

const NAVLINKGENERATE = () => {
  const { isEditing } = useAppContext();
  return [
    { logo: AiOutlineHome, to: '/', label: 'Home' },
    { logo: IoIosAddCircleOutline, to: '/create', label: isEditting ? 'Edit' : 'Create' },
    { logo: CgProfile, to: '/update', label: 'Profile' },
    { logo: AiOutlineHistory, to: '/history', label: 'History' },
  ];
};

export const NAVLINK = NAVLINKGENERATE();
