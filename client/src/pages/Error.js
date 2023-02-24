import React from 'react'
import { notFound } from '../assets'
import {useNavigate} from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate()
  return (
    <div>
      <section className='flex justify-center items-center flex-col min-h-screen space-y-8'>
      <img src={notFound} alt='not-found' className='h-auto w-1/2'/>
      <h1 className='text-2xl font-semibold'>Not Found Pages <span className='font-bold underline italic text-indigo-700 cursor-pointer' onClick={()=> navigate('/landing')}>Back</span></h1>
      </section>
    </div>
  )
}

export default Error
