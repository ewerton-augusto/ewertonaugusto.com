import React from 'react';
import GlobalLayout from '../../layout/GlobalLayout';
import {
  SectionHome,
  SectionJorney,
  SectionAwards,
  SectionFeedback,
  SectionNPS,
  SectionOutsideWork
} from '../../components/pdp/sections';

const PdpPage: React.FC = () => {
  return (
    <GlobalLayout>
      <div className='bg-white min-h-screen text-black text-xl'>
        <SectionHome />
        <SectionJorney />
        <SectionAwards />
        <SectionFeedback />
        <SectionNPS />
        <SectionOutsideWork />
      </div>
    </GlobalLayout>
  );
}

export default PdpPage;
