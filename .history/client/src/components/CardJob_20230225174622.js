import React from 'react';

const CardJob = ({ job }) => {
  const company = job.company[0];
  return (
    <div>
      <div>
        <div>{company}</div>
      </div>
    </div>
  );
};

export default CardJob;
