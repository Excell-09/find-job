import React from 'react';

const CardJob = ({jobs}) => {

  return jobs.map((item, i) => {
    return <div>{item.company }</div>
  })
};

export default CardJob;
