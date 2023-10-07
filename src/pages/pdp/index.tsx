import React from 'react';
import GlobalLayout from '../../layout/GlobalLayout';
import Title from '../../components/pdp/Title';
import SubTitle from '../../components/pdp/SubTitle';
import SectionNPS from '../../components/pdp/sections/SectionNPS';

import Section from '../../components/pdp/Section';
import SectionFeedback from '../../components/pdp/sections/SectionFeedback';
import SectionAwards from '../../components/pdp/sections/SectionAwards';
import SectionOutsideWork from '../../components/pdp/sections/SectionOutsideWork';

const PdpPage: React.FC = () => {
  return (
    <GlobalLayout>
      <div className='bg-white min-h-screen text-black text-xl'>
        <Section>
          <Title>home</Title>
          {/* title
          about
          missao, visao, valores
          foto */}
        </Section>
        <Section>
          {/* 
            onde estou / clientes / projetos que atendi
            PDI
          */}
          <Title>Minha jornada até agora</Title>
          <SubTitle>Time line</SubTitle>
          {/* clientes, projetos, challenges */}
          <SubTitle>Retro</SubTitle>
          {/* start doing
          stop doing
          do less
          keep doing
          do more */}
          <SubTitle>PDI</SubTitle>
          {/* mostrar a anterior e oq alcancei
          mostrar atual e plano smart */}
        </Section>
        
        <SectionAwards />
        <SectionFeedback />
        <SectionNPS />
        <SectionOutsideWork />
        
      </div>
    </GlobalLayout>
  );
}

export default PdpPage;
