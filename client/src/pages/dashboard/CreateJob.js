import React, { useState } from 'react';
import Alert from '../../components/Alert';
import Input from '../../components/Input';
import SelectInput from '../../components/SelectInput';
import { useAppContext } from './../../context/appContext';
import { initialStateFilter } from './Findjob';

const CreateJob = () => {
  const { isEditing, loading, jobLocation, createJob, editJob, clearEdit, propsEdit } = useAppContext();
  const initialstate = {
    position: propsEdit?.position || '',
    company: propsEdit?.company || '',
    jobLocation: propsEdit?.jobLocation || jobLocation,
    status: propsEdit?.status || 'pending',
    jobType: propsEdit?.jobType || 'full-time',
  };
  const [values, setValues] = useState(initialstate);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleClear = () => {
    setValues({ ...values, ...initialstate });
  };
  const handleCancel = () => {
    const initialstate2 = {
      position: '',
      company: '',
      jobLocation: jobLocation,
      status: 'pending',
      jobType: 'full-time',
    };
    clearEdit();
    setValues({ ...values, ...initialstate2 });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { position, company, jobLocation, status, jobType } = values;
    if (isEditing) {
      editJob({ position, company, jobLocation, status, jobType });
      handleCancel();
      return;
    }
    createJob({ position, company, jobLocation, status, jobType });
    handleClear();
  };
  return (
    <div className='bg-white p-5 rounded-sm shadow-lg relative'>
      <Alert absolute={true} />
      <h2 className='text-2xl font-semibold mb-5 '>{isEditing ? 'Edit Job' : 'Create Job'}</h2>
      <form className='grid grid-cols-8 gap-4' onSubmit={handleSubmit}>
        <div className='col-span-8 sm:col-span-4'>
          <Input labelTag label={'Position'} name='position' value={values.position} changeHandle={handleChange} type='text' />
        </div>
        <div className=' col-span-8 sm:col-span-4'>
          <Input labelTag label={'Company'} name='company' value={values.company} changeHandle={handleChange} type='text' />
        </div>
        <div className=' col-span-8 sm:col-span-4'>
          <Input labelTag label={'Job Location'} name='jobLocation' value={values.jobLocation} changeHandle={handleChange} type='text' />
        </div>
        <div className=' col-span-4 sm:col-span-2'>
          <SelectInput value={values.status} changeHandle={handleChange} label='Status' option={initialStateFilter.statusOptions} name='status' />
        </div>
        <div className=' col-span-4 sm:col-span-2'>
          <SelectInput value={values.jobType} changeHandle={handleChange} label='Type' option={initialStateFilter.jobTypeOptions} name='jobType' />
        </div>
        <div className=' col-span-8 sm:col-span-2 flex items-end gap-1 justify-start'>
          <button disabled={loading} className='shadow-md col-span-2 smallbtn py-2' type='submit'>
            {isEditing ? 'Edit' : 'Create'}
          </button>
          <button onClick={isEditing ? handleCancel : handleClear} className='shadow-md py-2 smallbtn bg-red-500 hover:bg-red-400' type='button'>
            {isEditing ? 'Cancel' : 'Clear'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateJob;
