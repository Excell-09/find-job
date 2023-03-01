import React from 'react'
import { Navigate } from 'react-router-dom'
import BigLoadingPage from '../components/BigLoadingPage'
import { useAppContext } from '../context/appContext';

const ProtectRoute = ({children}) => {
  const { user, userLoading } = useAppContext();

  if (userLoading) return <BigLoadingPage />;

  if (!user) {
    return <Navigate to='/login' />;
  }

return children;
  

  
}

export default ProtectRoute