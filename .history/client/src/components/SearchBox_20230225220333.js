import React from 'react';
import Input from './Input';
import SelectInput from './SelectInput';
import { initialStateFilter } from '../pages/dashboard/Findjob';

const SearchBox = ({ values, search, searchStatus, statusOptions, jobTypeOptions, searchType, sortOptions, sort, change }) => {
  const handleChange = (e) => {
    change({ ...values, [e.target.name]: e.target.value });
  };
  const handleClear = () => {
    change({ ...values, ...initialStateFilter });
  };

  return (
    <div className='bg-white p-5 '>
      <h1 className='mb-5 text-2xl font-bold'>Filter Jobs</h1>
      <div className='grid grid-cols-2 grid-rows-4 md:grid-cols-4 gap-3'>
        <div className=' col-span-3 row-span-2'>
          <label>Search</label>
          <Input label={'Search...'} name='search' value={search} type='type' changeHandle={handleChange} />
        </div>

        <SelectInput label={'Status'} option={['all', ...statusOptions]} value={searchStatus} name='searchStatus' changeHandle={handleChange} />
        <SelectInput label={'Type'} option={['all', ...jobTypeOptions]} value={searchType} name='searchType' changeHandle={handleChange} />
        <SelectInput label={'Sort'} option={[...sortOptions]} value={sort} name='sort' changeHandle={handleChange} />
        <button onClick={handleClear} type='button' className='bg-red-500 text-white font-semibold hover:bg-red-400 row-end-6 py-2'>
          Clear Filter
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
