import Input from '../../components/Input';
import Loading from '../../components/Loading';
import { useAppContext } from '../../context/appContext';
import Alert from './../../components/Alert';
import React, { useState } from 'react';

const Updateprofile = () => {
  const { loading, displayAlertClear, startLoading, clearAlert, stopLoading, user, updateUser } = useAppContext();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [lastName, setLastName] = useState(user?.lastName);
  const [location, setLocation] = useState(user?.location);

  const handleReset = () => {};

  const handleUpdate = (e) => {
    e.preventDefault();
    clearAlert();
    startLoading();

    if (!name || !email || !lastName || !location) {
      displayAlertClear('Input Should Not Empty');
      stopLoading();
      return;
    }

    updateUser({ name, email, lastName, location }, () => {
      clearAlert();
    });
  };

  return (
    <div className='relative w-full rounded-md '>
      <Alert absolute={true} />
      <form className='w-full p-5 bg-white' onSubmit={handleUpdate}>
        <h1 className='text-2xl font-semibold text-center mb-5'>Update Profile</h1>
        <div className='grid justify-center grid-cols-2 md:grid-cols-3 gap-4'>
          <div className=' col-span-2 sm:col-span-1'>
            <Input label={user?.name || 'Username'} value={name} type={'text'} name={'name'} changeHandle={(e) => setName(e.target.value)} minLength='2' />
          </div>
          <div className='col-span-2 sm:col-span-1'>
            <Input label={user?.lastName || 'LastName'} value={lastName} type={'text'} name={'lastName'} changeHandle={(e) => setLastName(e.target.value)} minLength='2' />
          </div>
          <div className='col-span-2 sm:col-span-1'>
            <Input label={user?.email || 'Email'} value={email} type={'email'} name={'email'} changeHandle={(e) => setEmail(e.target.value)} minLength='2' />
          </div>
          <div className='col-span-2 sm:col-span-1'>
            <Input label={user?.location || 'Location'} value={location} type={'text'} name={'location'} changeHandle={(e) => setLocation(e.target.value)} minLength='2' />
          </div>
          <div className='col-span-2 flex gap-3'>
            <button type='submit' disabled={loading || !(lastName || location || name)} className='smallbtn flex justify-center items-center'>
              {loading ? <Loading /> : 'Update'}
            </button>
            <button onClick={handleReset()} type='button' disabled={loading || !(email || lastName || location || name)} className='smallbtn bg-red-500 disabled:bg-red-400 hover:bg-red-400'>
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Updateprofile;
