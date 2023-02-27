import React from 'react';
import Input from '../../components/Input';
import { useAppContext } from './../../context/appContext';

const initialstate = {
  posisition: '',
  company: '',
  jobLocation: '',
  status: '',
  jobType: '',
};
const CreateJob = () => {
  const { isEditing } = useAppContext();
  return (
    <div>
      <h2>{isEditing ? 'Edit Job' : 'Create Job'}</h2>
      <form>
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <button>{isEditing ? 'Edit' : 'Create'}</button>
        <button>{isEditing ? 'Cancel' : 'Create'}</button>
      </form>
    </div>
  );
};

export default CreateJob;
