import React from 'react';

const BigLoadingPage = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center relative'>
      <div className='flex flex-col items-center'>
        <div className={`w-20 h-20 rounded-full border-8 border-blue-400 border-t-white border-l-white animate-spin`} />
        <h1 className='font-bold text-3xl mt-5 text-indigo-700'>Find Job</h1>
      </div>
    </div>
  );
};

export default BigLoadingPage;
