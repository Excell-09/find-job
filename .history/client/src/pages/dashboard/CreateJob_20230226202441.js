import React, { useState } from 'react';
import Input from '../../components/Input';
import SelectInput from '../../components/SelectInput';
import { useAppContext } from './../../context/appContext';
import { initialStateFilter } from './Findjob';

const initialstate = {
  position: '',
  company: '',
  jobLocation: '',
  status: '',
  jobType: '',
};
const CreateJob = () => {
  const { isEditing, loading } = useAppContext();
  const { values, setValues } = useState(initialstate);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className='bg-white p-5'>
      <h2>{isEditing ? 'Edit Job' : 'Create Job'}</h2>
      <form className='grid grid-cols-4'>
        <Input labelTag label={'Position'} name='position' value={values.position} changeHandle={handleChange} type='text' />
        <Input labelTag label={'Company'} name='company' value={values.company} changeHandle={handleChange} type='text' />
        <Input labelTag label={'Job Location'} name='jobLocation' value={values.jobLocation} changeHandle={handleChange} type='text' />
        <SelectInput changeHandle={handleChange} label='Status' option={statusOptions.} />
        <button disabled={loading} className='button' type='submit'>
          {isEditing ? 'Edit' : 'Create'}
        </button>
        <button className='button bg-red-500 hover:bg-red-400' type='button'>
          {isEditing ? 'Cancel' : 'Clear'}
        </button>
      </form>
    </div>
  );
};

export default CreateJob;
