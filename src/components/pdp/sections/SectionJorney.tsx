import React from 'react';
import Title from '../Title';
import SubTitle from '../SubTitle';
import Timeline from '../Timeline';

export const SectionJorney: React.FC = () => {
  return (
    <section className='w-full max-sm:p-4 p-6 min-h-screen flex items-center justify-center bg-red bg-opacity-70 text-white '>
      <div className='w-full mx-auto max-w-[1440px] py-20'>
        <Title color='white'>My Jorney</Title>
        <Timeline />
        <SubTitle>Retro</SubTitle>
        {/* start doing
    stop doing
    do less
    keep doing
    do more */}
        <SubTitle>PDI</SubTitle>
        {/* mostrar a anterior e oq alcancei
    mostrar atual e plano smart */}
        <img src="/pdp/goal.png" alt="nps" className='w-full max-w-[250px] mx-auto mt-12' />
      </div>
    </section>
  )
}
