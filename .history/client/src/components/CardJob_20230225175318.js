import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { BsFillCalendar2WeekFill } from 'react-icons/bs';
import { HiShoppingBag } from 'react-icons/hi';

const CardJob = ({ job, ableEdit = false }) => {
  console.log(job);
  const company = job.company[0];
  return (
    <div>
      <div>
        <div className='bg-indigo-500 w-10 h-10 flex justify-center items-center font-black text-white'>{company}</div>
        <h3>{job.position}</h3>
      </div>
      <div>
        <div>
          <FaTelegramPlane />
          <p>{job.jobLocation }</p>
        </div>
        <div>
          <BsFillCalendar2WeekFill />
          <p></p>
        </div>
        <div>
          <HiShoppingBag />
          <p>{job.jobType}</p>
        </div>
        <p>{job.status}</p>
      </div>
      {ableEdit && <div></div>}
    </div>
  );
};

export default CardJob;
