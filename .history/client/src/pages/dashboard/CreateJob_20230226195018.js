import React from 'react';
import {use} from './../../context/appContext'

const initialstate = {
  posisition: '',
  company: '',
  jobLocation: '',
  status: '',
  jobType: '',
}
const CreateJob = () => {
  const{} = useAppContact()
  return <div>create</div>;
};

export default CreateJob;
