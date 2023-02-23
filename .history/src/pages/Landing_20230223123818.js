import React from 'react';
import NavLanding from '../components/NavLanding';

const Landing = () => {
  return (
    <div>
      <NavLanding />
      <main>
        <section className='min-h-screen flex justify-center items-center'>
          <article className='sm:flex-1'>
            <h1>Temukan Job Impianmu Disini</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit nesciunt optio, possimus corporis aspernatur ullam error explicabo quos facere magni modi consectetur amet vero cupiditate dolorem libero ea labore eligendi?</p>
          </article>
          <div className='sm:flex-1'></div>
        </section>
      </main>
    </div>
  );
};

export default Landing;
