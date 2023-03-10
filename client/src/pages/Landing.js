import React from 'react';
import { useNavigate } from 'react-router-dom';
import { interviewIlustration } from '../assets';
import NavLanding from '../components/NavLanding';

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div>
      <NavLanding />
      <main className='px-7 max-w-6xl mx-auto'>
        <section className='sm:min-h-screen mt-[5rem] sm:mt-0 flex justify-center items-center sm:space-x-10 flex-wrap space-y-12'>
          <article className='sm:flex-1 space-y-3 text-center sm:text-start'>
            <h1 className=' font-bold text-blue-500 text-2xl'>Temukan Job Impianmu Disini</h1>
            <p className='text-slate-500'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit nesciunt optio, possimus corporis aspernatur ullam error explicabo quos facere magni modi consectetur amet vero
              cupiditate dolorem libero ea labore eligendi?
            </p>
            <button onClick={() => navigate('/register')} className='px-2 py-1 rounded-md bg-blue-700 hover:bg-blue-500 text-white'>
              Get Started
            </button>
          </article>
          <div className='sm:flex-1 flex justify-center items-center'>
            <img src={interviewIlustration} alt='banner' className='w-80 h-auto' />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Landing;
