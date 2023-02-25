import React from 'react';
import { useAppContext } from '../context/appContext';
import BigLoading from './BigLoading';
import CardJob from './CardJob';

const JobBox = ({ jobs, page }) => {
  const { totalJobs, loading, numOfPages } = useAppContext();

  if (loading) {
    return (
      <div className='flex mt-5 justify-center'>
        <BigLoading />
      </div>
    );
  }

  return (
    <div>
      {jobs.length === 0 ? <h1 className='text-xl font-semibold'>No Jobs</h1> : <h1 className='text-xl font-semibold'>{totalJobs} Found</h1>}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
        {jobs.map((item, i) => {
          return <CardJob ableEdit key={i} job={item} />;
        })}
      </div>

      <div>
        {Array(numOfPages).map((item, i) => {
          return (
            <div>
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobBox;
