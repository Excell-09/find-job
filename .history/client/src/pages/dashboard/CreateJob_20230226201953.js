import React, { useState } from 'react';
import Input from '../../components/Input';
import { useAppContext } from './../../context/appContext';

const initialstate = {
  position: '',
  company: '',
  jobLocation: '',
  status: '',
  jobType: '',
};
const CreateJob = () => {
  const { isEditing } = useAppContext();
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
        <Input labelTag label={'Status'} name='status' value={values.status} changeHandle={handleChange} type='text' />
        <Input labelTag label={'Job Type'} name='jobType' value={values.jobType} changeHandle={handleChange} type='text' />
        <button className='button' type='submit'>
          {isEditing ? 'Edit' : 'Create'}
        </button>
        <button className='button' type='button'>
          {isEditing ? 'Cancel' : 'Clear'}
        </button>
      </form>
    </div>
  );
};

export default CreateJob;
