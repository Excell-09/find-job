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
  
  </div>;
};

export default CreateJob;
