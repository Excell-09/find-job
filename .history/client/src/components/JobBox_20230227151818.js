import React from 'react';
import { useAppContext } from '../context/appContext';
import BigLoading from './BigLoading';
import CardJob from './CardJob';

const JobBox = ({ jobs, page, setPage }) => {
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
      {jobs.length === 0 ? <h1 className='text-2xl font-semibold my-5'>No Jobs</h1> : <h1 className='text-2xl font-semibold my-5'>{totalJobs} Found</h1>}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
        {jobs.map((item, i) => {
          return <CardJob ableEdit key={i} job={item} />;
        })}
      </div>

      <div className='mb-24 mt-5 md:my-5'>
        <div className='flex items-center justify-center md:justify-end'>
          <div
            className='font-bold text-center bg-white w-9 flex text-2xl items-center justify-center h-9 cursor-pointer'
            onClick={() => {
              if (page <= 1) {
                setPage(--page);
              }
              setPage(--page);
            }}>
            {'<'}
          </div>
          {Array.from({ length: numOfPages }, (_, i) => i + 1).map((item, i) => {
            if (item === page) {
              return (
                <div className={`border-2 bg-indigo-500 w-9 h-9 text-white font-bold flex items-center justify-center hover:bg-indigo-500 cursor-pointer`} key={i} onClick={() => setPage(item)}>
                  <p>{item}</p>
                </div>
              );
            }
            return (
              <div className={`border-2 bg-indigo-300 w-9 h-9 text-white font-bold flex items-center justify-center hover:bg-indigo-400 cursor-pointer`} key={i} onClick={() => setPage(item)}>
                <p>{item}</p>
              </div>
            );
          })}
          <div className='font-bold text-center bg-white w-9 flex text-2xl items-center justify-center h-9 cursor-pointer' onClick={() => setPage(++page)}>
            {'>'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobBox;
