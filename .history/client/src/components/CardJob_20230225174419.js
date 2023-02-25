import React from 'react';

const CardJob = ({ job }) => {
  return job.map((item, i) => {
    return <div>{item.company}</div>;
  });
};

export default CardJob;
