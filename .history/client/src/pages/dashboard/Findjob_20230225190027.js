import React from 'react';
import JobBox from '../../components/JobBox';
import SearchBox from '../../components/SearchBox';

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

  return (
    <>
      <SearchBox />
      <JobBox/>
    </>
  );
};

export default Findjob;
