import React from 'react';
import NavLanding from '../components/NavLanding';

const Landing = () => {
  return (
    <div>
      <NavLanding />
      <main className=''>
        <section className='min-h-full flex justify-center items-center'>
          <article className='md:flex-1'>
            <h1>Temukan Job Impianmu Disini</h1>
          </article>
          <div className='md:flex-1'></div>
        </section>
      </main>
    </div>
  );
};

export default Landing;
