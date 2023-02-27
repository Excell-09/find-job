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
    <div>
      <h2>{isEditing ? 'Edit Job' : 'Create Job'}</h2>
      <form>
        <Input labelTag label={'Position'} name='position' value={values.position} changeHandle={handleChange} type='text' />
        <Input labelTag label={'company'} name='company' value={values.company} changeHandle={handleChange} type='text' />
        <Input labelTag label={'jobLocation'} name='jobLocation' value={values.jobLocation} changeHandle={handleChange} type='text' />
        <Input labelTag label={'status'} name='status' value={values.status} changeHandle={handleChange} type='text' />
        <Input labelTag label={'job'} name='job' value={values.job} changeHandle={handleChange} type='text' />
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
