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
  const{} = useAppContact()
  return <div>create</div>;
};

export default CreateJob;
