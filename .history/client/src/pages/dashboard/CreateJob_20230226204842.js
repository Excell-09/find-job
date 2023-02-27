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
  const handleClear = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  return (
    <div className='bg-white p-5'>
      <h2>{isEditing ? 'Edit Job' : 'Create Job'}</h2>
      <form className='grid grid-cols-4'>
        <Input labelTag label={'Position'} name='position' value={values.position} changeHandle={handleChange} type='text' />
        <Input labelTag label={'Company'} name='company' value={values.company} changeHandle={handleChange} type='text' />
        <Input labelTag label={'Job Location'} name='jobLocation' value={values.jobLocation} changeHandle={handleChange} type='text' />
        <SelectInput value={values.status} changeHandle={handleChange} label='Status' option={initialStateFilter.statusOptions} name='status' />
        <SelectInput value={values.jobType} changeHandle={handleChange} label='Type' option={initialStateFilter.jobTypeOptions} name='jobType' />
        <button disabled={loading} className='button' type='submit'>
          {isEditing ? 'Edit' : 'Create'}
        </button>
        <button onClick={isEditing : ()=>{</form>} className='button bg-red-500 hover:bg-red-400' type='button'>
          {isEditing ? 'Cancel' : 'Clear'}
        </button>
      </form>
    </div>
  );
};

export default CreateJob;
