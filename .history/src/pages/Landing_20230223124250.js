import React from 'react';
import NavLanding from '../components/NavLanding';

const Landing = () => {
  return (
    <div>
      <NavLanding />
      <main className='px-3 max-w-6xl mx-auto'>
        <section className='min-h-screen flex justify-center items-center'>
          <article className='sm:flex-1 space-y-3'>
            <h1 className=' font-bold text-blue-500 text-2xl'>Temukan Job Impianmu Disini</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit nesciunt optio, possimus corporis aspernatur ullam error explicabo quos facere magni modi consectetur amet vero cupiditate dolorem libero ea labore eligendi?</p>
            <button className='border px-2 py-1 rounded-md bg-blue-700 hover:bg-hover text-white'>Get Started</button>
          </article>
          <div className='sm:flex-1'></div>
        </section>
      </main>
    </div>
  );
};

export default Landing;
