import React from 'react';
import { useAppContext } from '../context/appContext';

const Alert = ({ absolute = false }) => {
  const { textAlert, typeAlert } = useAppContext();

  const statusAlert = {
    success: 'bg-green-500',
    error: 'bg-red-500',
  };

  return (
    <div className={`z-30 ${statusAlert[typeAlert]} text-white p-4 py-2 text-lg rounded-md ${absolute && 'absolute top-0 right-1/2 translate-x-1/2 translate-y-1/2 bg-opacity-95'} text-center`}>
      {textAlert}
    </div>
  );
};

export default Alert;
