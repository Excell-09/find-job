import React, { useState } from 'react';
import Input from '../../components/Input';
import SelectInput from '../../components/SelectInput';
import { useAppContext } from './../../context/appContext';
import { initialStateFilter } from './Findjob';

const CreateJob = () => {
  const { isEditing, loading, jobLocation } = useAppContext();
  const initialstate = {
    position: '',
    company: '',
    jobLocation,
    status: 'pending',
    jobType: 'full-time',
  };
  const [values, setValues] = useState(initialstate);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleClear = () => {
    setValues({ ...values, ...initialstate });
  };
  return (
    <div className='bg-white p-5 rounded-sm shadow-lg'>
      <h2 className='text-2xl font-semibold mb-5 '>{isEditing ? 'Edit Job' : 'Create Job'}</h2>
      <form className='flex flex-wrap gap-4'>
        <div className='grow w-1/2'>
          <Input labelTag label={'Position'} name='position' value={values.position} changeHandle={handleChange} type='text' />
        </div>
        <div className='grow w-1/2'>
          <Input labelTag label={'Company'} name='company' value={values.company} changeHandle={handleChange} type='text' />
        </div>
        <div className='grow'>
          <Input labelTag label={'Job Location'} name='jobLocation' value={values.jobLocation} changeHandle={handleChange} type='text' />
        </div>
        <div className='grow'>
          <SelectInput value={values.status} changeHandle={handleChange} label='Status' option={initialStateFilter.statusOptions} name='status' />
        </div>
        <div className='grow'>
          <SelectInput value={values.jobType} changeHandle={handleChange} label='Type' option={initialStateFilter.jobTypeOptions} name='jobType' />
        </div>
        <div className='grow flex items-end'>
          <button disabled={loading} className='button' type='submit'>
            {isEditing ? 'Edit' : 'Create'}
          </button>
          <button onClick={isEditing ? () => {} : handleClear} className='button bg-red-500 hover:bg-red-400' type='button'>
            {isEditing ? 'Cancel' : 'Clear'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateJob;
