import React from 'react';
import { interviewIlustration } from '../assets';
import NavLanding from '../components/NavLanding';

const Landing = () => {
  return (
    <div>
      <NavLanding />
      <main className='px-7 max-w-6xl mx-auto'>
        <section className='min-h-screen flex justify-center items-center space-x-10'>
          <article className='sm:flex-1 space-y-3 text-center sm:text-start'>
            <h1 className=' font-bold text-blue-500 text-2xl'>Temukan Job Impianmu Disini</h1>
            <p className='text-slate-500'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit nesciunt optio, possimus corporis aspernatur ullam error explicabo quos facere magni modi consectetur amet vero
              cupiditate dolorem libero ea labore eligendi?
            </p>
            <button className='border px-2 py-1 rounded-md bg-blue-700 hover:bg-blue-500 text-white'>Get Started</button>
          </article>
          <div className='sm:flex-1'>
            <img src={interviewIlustration } alt='banner' className='w-27 h-auto mx-auto' />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Landing;
