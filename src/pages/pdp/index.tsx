import React, { useEffect, useState } from 'react';
import GlobalLayout from '../../layout/GlobalLayout';
import {
  SectionHome,
  SectionMission,
  SectionJorney,
  SectionRetro,
  SectionPDI,
  SectionAwards,
  SectionFeedback,
  SectionNPS,
  SectionOutsideWork,
  SectionQA,
} from '../../components/pdp/sections';

const PdpPage: React.FC = () => {
  const [section, setSection] = useState(0);

  const sectionState = [
    'home', 'mission', 'jorney', 'retro', 'pdi', 'awards', 'feedback', 'nps', 'outside', 'qa'
  ];

  const handleNextSection = () => section <= (sectionState.length - 1) && setSection(section + 1);
  const handleBackSection = () => section >= 0 && setSection(section - 1);

  useEffect(() => {
    const el = document.getElementById(sectionState[section]);
    el?.scrollIntoView({ behavior: "smooth" });
  }, [section]);

  return (
    <GlobalLayout>
      <div className='bg-white min-h-screen text-black text-xl'>
        <div id='home'>
          <SectionHome />
        </div>
        <div id='mission'>
          <SectionMission />
        </div>
        <div id='jorney'>
          <SectionJorney />
        </div>
        <div id='retro'>
          <SectionRetro />
        </div>
        <div id='pdi'>
          <SectionPDI />
        </div>
        <div id='awards'>
          <SectionAwards />
        </div>
        <div id='feedback'>
          <SectionFeedback />
        </div>
        <div id='nps'>
          <SectionNPS />
        </div>
        <div id='outside'>
          <SectionOutsideWork />
        </div>
        <div id='qa'>
          <SectionQA />
        </div>
        {section !== 0 && section <= sectionState.length - 1 && (
          <button className='fixed bottom-4 left-4 rounded-full bg-black bg-opacity-50 p-4 flex items-center justify-center w-10 h-10 text-white' onClick={handleBackSection} title='Back'>
            {'<'}
          </button>
        )}
        {section < sectionState.length - 1 && section >= 0 && (
          <button className='fixed bottom-4 right-4 rounded-full bg-black bg-opacity-50 p-4 flex items-center justify-center w-10 h-10 text-white' onClick={handleNextSection} title='Next'>
            {'>'}
          </button>
        )}
      </div>
    </GlobalLayout>
  );
}

export default PdpPage;
