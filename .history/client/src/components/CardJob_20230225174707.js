import React from 'react';

const CardJob = ({ job }) => {
  const company = job.company[0];
  return (
    <div>
      <div>
        <div className='bg-'>{company}</div>
        <h3>{job.position }</h3>
      </div>
    </div>
  );
};

export default CardJob;
