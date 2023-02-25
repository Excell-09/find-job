import React, { useEffect, useState } from 'react';
import JobBox from '../../components/JobBox';
import SearchBox from '../../components/SearchBox';
import { useAppContext } from '../../context/appContext';

export const initialStateFilter = {
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
const History = () => {
  const [values, setValues] = useState(initialStateFilter);
  const { search, searchStatus, searchType, sort, statusOptions, jobTypeOptions, sortOptions } = values;
  const { jobs, getJobs } = useAppContext();
  useEffect(() => {
    getJobsHistory({ search, searchStatus, searchType, sort });
    // eslint-disable-next-line
  }, [search, searchStatus, searchType, sort]);

  return (
    <>
      <SearchBox
        values={values}
        change={setValues}
        search={search}
        searchStatus={searchStatus}
        statusOptions={statusOptions}
        jobTypeOptions={jobTypeOptions}
        searchType={searchType}
        sortOptions={sortOptions}
        sort={sort}
      />
      <JobBox jobs={jobs} />
    </>
  );
};

export default History;
