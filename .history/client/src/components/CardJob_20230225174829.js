import React from 'react';

const CardJob = ({ job,abled }) => {
  const company = job.company[0];
  return (
    <div>
      <div>
        <div className='bg-indigo-500 w-10 h-10 flex justify-center items-center font-black text-white'>{company}</div>
        <h3>{job.position }</h3>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default CardJob;
