import React from 'react';
import { useAppContext } from './../context/appContext';
import Input from './Input';
import SelectInput from './SelectInput';

const SearchBox = () => {
  

  const handleQueary = (e) => {
    handleChange({ name: e.target.name, value: e.target.value });
  };
  
  return (
    <div className='bg-white p-5 '>
      <h1 className='mb-5 text-2xl font-bold'>Filter Jobs</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
        <div className=' col-span-2'>
          <label>Search</label>
          <Input label={'Search...'} name='search' value={search} type='type' changeHandle={handleQueary} />
        </div>

        <SelectInput label={'Status'} option={['all', ...statusOptions]} value={searchStatus} name='searchStatus' changeHandle={handleQueary} />
        <SelectInput label={'Type'} option={['all', ...jobTypeOptions]} value={searchType} name='searchType' changeHandle={handleQueary} />
        <SelectInput label={'Sort'} option={['latest', ...sortOptions]} value={sort} name='sort' changeHandle={handleQueary} />
        <button onClick={handleClear} type='button' className='bg-red-500 text-white font-semibold'>
          Clear Filter
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
