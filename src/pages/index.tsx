import React from 'react';
import GlobalLayout from '../layout/GlobalLayout';
import IconLink from '../components/Icons/IconLink';

const Home: React.FC = () => {
  return (
    <GlobalLayout>
      <section className="w-screen h-screen p-4 flex flex-col justify-center items-center text-center box-border">
        <img src="/assets/images/ewerton-augusto-logo.svg" alt="Ewerton Augusto" className="mx-auto my-4 w-full max-w-[180px]" />
        <h1 className='text-4xl'>Coming soon</h1>
        <p className='mt-4 mb-5 w-full max-w-2xl'>
          Hi, I am <strong>Ewerton Augusto a Front-end Engineer</strong>. Thanks for visiting my website. At the moment it is under construction, even though you can contact me via:
        </p>
        <ul className='flex gap-4'>
          <li>
            <IconLink icon='' label='LinkedIn' url="https://www.linkedin.com/in/ewerton-augusto/" />
          </li>
          <li>
            <IconLink icon='' label='GitHub' url="https://github.com/ewerton-augusto" />
          </li>
          <li>
            <IconLink icon='' label='E-mail' url="mailto:ewerton.santos2210@gmail.com" />
          </li>
        </ul>
      </section>
    </GlobalLayout>
  )
}

export default Home;
