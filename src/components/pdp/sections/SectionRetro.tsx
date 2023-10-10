import React from 'react';
import Title from '../Title';
import Section from '../Section';
import dynamic from 'next/dynamic';

const RadarChartProgress = dynamic(
  import("../RadarChartProgress"),
  { ssr: false }
);

export const SectionRetro: React.FC = () => {
  return (
    <Section className='my-20'>
      <Title>Em relação às minhas aspirações, o que eu deveria...</Title>
      <div className='grid max-lg:grid-cols-1 max-lg:grid-rows-4 grid-cols-2 grid-rows-2 w-full mx-auto text-center gap-8 my-20'>
        <div className='border-[1px] border-red border-opacity-20 rounded-lg shadow-xl'>
          <h2 className='text-red font-semibold capitalize my-4'>stop doing</h2>
          <ul>
            <li></li>
          </ul>
        </div>
        <div className='border-[1px] border-red border-opacity-20 rounded-lg shadow-xl'>
          <h2 className='text-red font-semibold capitalize my-4'>keep doing</h2>
          <ul>
            <li></li>
          </ul>
        </div>
        <div className='border-[1px] border-red border-opacity-20 rounded-lg shadow-xl'>
          <h2 className='text-red font-semibold capitalize my-4'>do more</h2>
          <ul>
            <li></li>
          </ul>
        </div>
        <div className='border-[1px] border-red border-opacity-20 rounded-lg shadow-xl'>
          <h2 className='text-red font-semibold capitalize my-4'>start doing</h2>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
      <RadarChartProgress />
    </Section>
  )
}
