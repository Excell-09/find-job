import React from 'react';
import SmallHeader from '../../components/SmallHeader';
import BigHeader from '../../components/BigHeader';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return <div className='relative flex'>
    <SmallHeader/>
    <BigHeader/>
    <main className='w-full'>
      <section className='mt-[75px] md:ml-[183px] pt-3 px-3'>
      <Outlet/>
      </section>
    </main>
  </div>;
};

export default Layout;
