import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { BsFillCalendar2WeekFill } from 'react-icons/bs';
import { HiShoppingBag } from 'react-icons/hi';
import moment from 'moment/moment';

const COLOR_BG = ['bg-indigo-500', 'bg-red-400', 'bg-blue-400', 'bg-yellow-500', 'bg-green-500'];
const COLOR_STATUS = {
  pending:'bg-yellow-500',
  interview:'bg-blue-500',
  declined:'bg-red-500',
};

const CardJob = ({ job, ableEdit = false }) => {
  const company = job.company[0];

  let date = moment(job.createdAt);
  date = date.format('MMM Do', 'YYYY');

  const generateRandomColor = () => {
    const random = Math.floor(Math.random() * 5);

    return COLOR_BG[random];
  };

  const bg = generateRandomColor();

  return (
    <div className='bg-white rounded-md p-3 shadow-lg'>
      <div className='flex items-center space-x-2'>
        <div className={`${bg} w-10 h-10 flex justify-center items-center font-black text-white`}>{company}</div>
        <div>
          <h3 className='text-lg font-semibold'>{job.position}</h3>
          <p className='text-gray-500'>{job.company}</p>
        </div>
      </div>
      <hr className=' border-t-2 my-2 border-gray-400' />
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
        <p className={`${COLOR_BG}`}>{job.status}</p>
      </div>

      {ableEdit && <hr className=' border-t-2 my-2 border-gray-400' />}
      {ableEdit && <div></div>}
    </div>
  );
};

export default CardJob;
