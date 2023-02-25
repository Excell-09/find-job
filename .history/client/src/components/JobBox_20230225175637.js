import React, { useEffect } from 'react';
import { useAppContext } from '../context/appContext';
import BigLoading from './BigLoading';
import CardJob from './CardJob';

const JobBox = () => {
  const { jobs, getJobs, search, searchStatus, searchType, sort, page, totalJobs, loading } = useAppContext();
  useEffect(() => {
    getJobs();
    // eslint-disable-next-line
  }, [search, searchStatus, searchType, sort, page]);

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
      <div className='grid grid-cols-1 md:grid'>
        {jobs.map((item, i) => {
          return <CardJob key={i} job={item} />;
        })}
      </div>
    </div>
  );
};

export default JobBox;
