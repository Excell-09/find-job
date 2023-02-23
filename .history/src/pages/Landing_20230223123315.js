import React from 'react';
import NavLanding from '../components/NavLanding';

const Landing = () => {
  return (
    <div>
      <NavLanding />
      <main className=''>
        <section className='min-h-full grid grid-cols-1 md:grid-cols-2 justify-center'>
          <article>
            <h1>Temukan Job Impianmu Disini</h1>
          </article>
          <div></div>
        </section>
      </main>
    </div>
  );
};

export default Landing;
