import React, { useState } from 'react'
import Input from '../components/Input'
import NavLanding from '../components/NavLanding'
import { useAppContext } from '../context/appContext'
import Alert from '../components/Alert'
import Loading from '../components/Loading'

const Register = () => {
  const [values,setValues] = useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:''
  })
  const {login,displayAlert,showAlert,clearAlert,startLoading,stopLoading,loading} = useAppContext()
  

  const handleChange = (e)=>{
    setValues({...values,[e.target.name]: e.target.value})
  }

  const handleRegister = async(e)=>{
    e.preventDefault()
    clearAlert()
    startLoading()
    const {name,email,password,confirmPassword} = values

    password !== confirmPassword && displayAlert('password tidak cocok', 'error')
    
  }

  return (
    <div>
      <NavLanding />
      <main className='px-7 max-w-6xl mx-auto'>
        <section className='flex justify-center items-center flex-col min-h-screen'>
        <form className='sm:w-1/2 bg-slate-600 p-6' onSubmit={handleRegister}>
        <h1 className='text-2xl text-white text-center mb-5 font-semibold'>Get Started</h1>
        {showAlert && <Alert/>}
        <div className='space-y-3 mt-5'>
          <Input label='Username' type='text' name='name' changeHandle={handleChange} minLength='2'/>
          <Input label='Email' type='email' name='email' changeHandle={handleChange} minLength='2'/>
          <Input label='Password' type='password' name='password' minLength='6' pattern="(?=.*[A-Z])(?=.*\d).+"changeHandle={handleChange} title="Password minimal harus 1 kapital dan 1 angka"/>
          <Input label='Confirm Password' type='password' name='confirmPassword' minLength='6' pattern="(?=.*[A-Z])(?=.*\d).+"changeHandle={handleChange} title="Password minimal harus 1 kapital dan 1 angka"/>
        </div>
          <button type='submit' className='flex justify-center items-center w-full h-12 bg-blue-500 text-white rounded-sm hover:bg-blue-400 mt-5'>{loading ? <Loading width={5}/> : 'Register'}</button>
        </form>
        </section>
      </main>
    </div>
  );
}

export default Register
