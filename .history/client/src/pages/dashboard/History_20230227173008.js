import React, { useEffect, useState } from 'react';
import JobBox from '../../components/JobBox';
import SearchBox from '../../components/SearchBox';
import { useAppContext } from '../../context/appContext';
import { initialStateFilter } from './Findjob';

const History = () => {
  const [values, setValues] = useState(initialStateFilter);
  const [page, setPage] = useState(1);
  const { search, searchStatus, searchType, sort, statusOptions, jobTypeOptions, sortOptions } = values;
  const { jobs, getJobsHistory, deleteJob } = useAppContext();
  useEffect(() => {
    getJobsHistory({ search, searchStatus, searchType, sort, page, setPage });
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
      <JobBox jobs={jobs} page={page} setPage={setPage} />
    </>
  );
};

export default History;
