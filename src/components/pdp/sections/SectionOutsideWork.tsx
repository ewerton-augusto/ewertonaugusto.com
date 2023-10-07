import React from 'react';
import Title from '../Title';
import SubTitle from '../SubTitle';

export const SectionOutsideWork: React.FC = () => {
  {/* 
          mostrar que sigo me capacitando, eventos, palestras, treinamentos
            - KZ Website
            - Compartilhando eventos externos como frontin sampa e atendendo ao evento 2022 / 2023
            - Figma Designs
            - KZ Website (Triage - HMTL, CSS, JS)
            - Auge Website (Nuxt3)
            - Site pessoal (NextJS)
            - Mentorado - Aline Ribeiro
            - Mentor - Victor Kurauchi
          */}
  return (
    <section className='w-full max-sm:p-4 p-6 min-h-screen flex items-center justify-center bg-red bg-opacity-70 text-white'>
      <div className='w-full mx-auto max-w-[1440px]'>
        <Title color='white'>Outside of work</Title>

        <div>
          <SubTitle>Eventos</SubTitle>
        </div>

        <div>
          <SubTitle>Figma Design</SubTitle>

        </div>
      </div>
    </section>
  )
}
