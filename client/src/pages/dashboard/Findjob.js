import React, { useEffect, useState } from 'react';
import JobBox from '../../components/JobBox';
import SearchBox from '../../components/SearchBox';
import { useAppContext } from '../../context/appContext';

export const initialStateFilter = {
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  jobType: 'full-time',
  statusOptions: ['pending', 'interview', 'declined'],
  status: 'pending',
  search: '',
  searchStatus: 'all',
  searchType: 'all',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
};
const Findjob = () => {
  const [values, setValues] = useState(initialStateFilter);
  const [page, setPage] = useState(1);
  const { search, searchStatus, searchType, sort, statusOptions, jobTypeOptions, sortOptions } = values;
  const { jobs, getJobs } = useAppContext();
  useEffect(() => {
    getJobs({ search, searchStatus, searchType, sort, page, setPage });
    // eslint-disable-next-line
  }, [search, searchStatus, searchType, sort, page]);

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
      <JobBox ableEdit={false} jobs={jobs} page={page} setPage={setPage} />
    </>
  );
};

export default Findjob;
