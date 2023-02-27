import React from 'react';
import {useAppContext} from './../../context/appContext'

const initialstate = {
  posisition: '',
  company: '',
  jobLocation: '',
  status: '',
  jobType: '',
}
const CreateJob = () => {
  const{isEditing} = useAppContext()
  return <div>
    <h2>{isEditing ? 'Edit Job' : 'Create Job'}</h2>
    <form>
      <Inp
    </form>
  </div>;
};

export default CreateJob;
