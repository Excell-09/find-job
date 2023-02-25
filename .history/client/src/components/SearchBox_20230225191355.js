import React from 'react';
import Input from './Input';
import SelectInput from './SelectInput';

const SearchBox = ({ values, search, searchStatus, statusOptions, jobTypeOptions, searchType, sortOptions, sort, change }) => {
  const handleChange = (e) => {
    change.setChange(...values, [e.target.name] : e.target.value);
  };

  return (
    <div className='bg-white p-5 '>
      <h1 className='mb-5 text-2xl font-bold'>Filter Jobs</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
        <div className=' col-span-2'>
          <label>Search</label>
          <Input label={'Search...'} name='search' value={search} type='type' changeHandle={() => {}} />
        </div>

        <SelectInput label={'Status'} option={['all', ...statusOptions]} value={searchStatus} name='searchStatus' changeHandle={() => {}} />
        <SelectInput label={'Type'} option={['all', ...jobTypeOptions]} value={searchType} name='searchType' changeHandle={() => {}} />
        <SelectInput label={'Sort'} option={['latest', ...sortOptions]} value={sort} name='sort' changeHandle={() => {}} />
        <button onClick={() => {}} type='button' className='bg-red-500 text-white font-semibold'>
          Clear Filter
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
