import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import NavLanding from '../components/NavLanding'
import { useAppContext } from '../context/appContext'
import Alert from '../components/Alert'
import Loading from '../components/Loading'
import { Link, useNavigate } from 'react-router-dom'

const initialState = {
  name:'',
  email:'',
  password:'',
  confirmPassword:''
}
const Register = () => {
  const {setupUser,displayAlert,showAlert,clearAlert,startLoading,stopLoading,loading} = useAppContext()
  useEffect(()=>{
    clearAlert()
    stopLoading()
// eslint-disable-next-line  
},[])
  const navigate = useNavigate()
  const [values,setValues] = useState(initialState)
  
  const clearInput =()=>{
    setValues(initialState)
  }
  const handleChange = (e)=>{
    setValues({...values,[e.target.name]: e.target.value})
  }

  const handleRegister = async(e)=>{
    e.preventDefault()
    clearAlert()
    startLoading()
    const {name,email,password,confirmPassword} = values

    if(password !== confirmPassword) {
      stopLoading()
      return displayAlert('password tidak cocok', 'error')
    }

    const currentUser = {
      name,email,password
    }
    await setupUser(currentUser,'register','Account Created!, Redirect...',()=>{
      clearInput()
      setTimeout(()=>{
        clearAlert()
        navigate('/login')
      },2000)
    })

  
  }

  return (
    <div>
      <NavLanding />
      <main className='px-4 max-w-6xl mx-auto'>
        <section className='flex justify-center items-center flex-col min-h-screen'>
        <form autoComplete='off' autoCorrect='off' className='w-[95%] sm:w-3/4 lg:w-1/2 bg-slate-600 p-6' onSubmit={handleRegister}>
        <h1 className='text-2xl text-white text-center mb-5 font-bold'>Get Started</h1>
        {showAlert && <Alert/>}
        <div className='space-y-3 mt-5'>
          <Input label='Username' type='text' name='name' changeHandle={handleChange} minLength='2'/>
          <Input label='Email' type='email' name='email' changeHandle={handleChange} minLength='2'/>
          <Input label='Password' type='password' name='password' minLength='6' pattern="(?=.*[A-Z])(?=.*\d).+"changeHandle={handleChange} title="Password minimal harus 1 kapital dan 1 angka"/>
          <Input label='Confirm Password' type='password' name='confirmPassword' minLength='6' pattern="(?=.*[A-Z])(?=.*\d).+"changeHandle={handleChange} title="Password minimal harus 1 kapital dan 1 angka"/>
        </div>
          <button disabled={loading || !(values.name && values.email && values.password && values.confirmPassword)} type='submit' className='button mt-5'>{loading ? <Loading /> : 'Register'}</button>

          <p className='text-slate-300 text-center mt-5'>Already Has Account? <Link className='italic text-slate-100 font-bold' to={'/login'}>
          Login
          </Link>
          </p>
        </form>
        </section>
      </main>
    </div>
  );
}

export default Register
