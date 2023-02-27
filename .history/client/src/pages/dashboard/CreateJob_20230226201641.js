import React from 'react';
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
  const handleChange = (e) => {};
  return (
    <div>
      <h2>{isEditing ? 'Edit Job' : 'Create Job'}</h2>
      <form>
        <Input labelTag label={'Position'} name='position' value='' changeHandle={handleChange} type='text' />
        <Input labelTag label={'Position'} name='position' value='' changeHandle={handleChange} type='text' />
        <Input labelTag label={'Position'} name='position' value='' changeHandle={handleChange} type='text' />
        <Input labelTag label={'Position'} name='position' value='' changeHandle={handleChange} type='text' />
        <Input labelTag label={'Position'} name='position' value='' changeHandle={handleChange} type='text' />
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
