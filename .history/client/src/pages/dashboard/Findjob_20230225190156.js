import React, { useEffect, useState } from 'react';
import JobBox from '../../components/JobBox';
import SearchBox from '../../components/SearchBox';
import { useAppContext } from '../../context/appContext';

const initialState = {
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  jobType: 'full-time',
  statusOptions: ['interview', 'declined', 'pending'],
  status: 'pending',
  search: '',
  searchStatus: 'all',
  searchType: 'all',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
};
const Findjob = () => {
  const [values, setValues] = useState(initialState);
    const { search, searchStatus, searchType, sort } = values;
    const { ,job,getJobs } = useAppContext();
    useEffect(() => {
      getJobs();
      // eslint-disable-next-line
    }, [search, searchStatus, searchType, sort]);

  return (
    <>
      <SearchBox />
      <JobBox/>
    </>
  );
};

export default Findjob;
