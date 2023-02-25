import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { BsFillCalendar2WeekFill } from 'react-icons/bs';
import { HiShoppingBag } from 'react-icons/hi';
import moment from 'moment/moment';

const CardJob = ({ job, ableEdit = false }) => {
  console.log(job);
  const company = job.company[0];

  let date = moment(job.createdAt);
  date = date.format('MMM Do', 'YYYY');
  return (
    <div className='bg-white rounded-md p-3 hover:scale-105 transition-all duration-150'>
      <div className='flex items-center space-x-2'>
        <div className='bg-indigo-500 w-10 h-10 flex justify-center items-center font-black text-white'>{company}</div>
        <div>
          <h3 className='text-lg font-semibold'>{job.position}</h3>
          <p className='text-gray-500'>{job.company}</p>
        </div>
      </div>
      <div className='grid grid-cols-2'>
        <div>
          <FaTelegramPlane />
          <p>{job.jobLocation}</p>
        </div>
        <div>
          <BsFillCalendar2WeekFill />
          <p>{date}</p>
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
