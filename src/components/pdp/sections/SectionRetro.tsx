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
    <Section className='mt-20'>
      <Title>Em relação às minhas aspirações, o que eu deveria...</Title>
      <div className='grid max-lg:grid-cols-1 max-lg:grid-rows-4 grid-cols-2 grid-rows-2 w-full mx-auto text-center gap-8 my-20'>
        <div className='border-[1px] border-red border-opacity-20 rounded-lg shadow-xl'>
          <h2 className='text-red font-semibold capitalize my-4'>stop doing</h2>
          <ul>
            <li>- Câmera fechada durante reuniões</li>
            <li>- Iniciar estudos e PoCs e não ir até o fim quando fazem sentido</li>
          </ul>
        </div>
        <div className='border-[1px] border-red border-opacity-20 rounded-lg shadow-xl'>
          <h2 className='text-red font-semibold capitalize my-4'>keep doing</h2>
          <ul>
            <li>- Comunicando ativamente entre cross-teams (leaders, designers, backenders, ...)</li>
            <li>- Sendo proativo com ideias e sugestões</li>
            <li>- Feedbacks positivos e de blockers em tempo hábil</li>
          </ul>
        </div>
        <div className='border-[1px] border-red border-opacity-20 rounded-lg shadow-xl'>
          <h2 className='text-red font-semibold capitalize my-4'>do more</h2>
          <ul>
            <li>- Continuar apromorando meus conhecimentos em front-end</li>
            <li>- Atuar mais em reviews e tasks também no backend</li>
            <li>- Atuar como CA novamente de um(a) CI&Ter</li>
          </ul>
        </div>
        <div className='border-[1px] border-red border-opacity-20 rounded-lg shadow-xl'>
          <h2 className='text-red font-semibold capitalize my-4'>start doing</h2>
          <ul>
            <li>- Fazer apresentações/workshops sobre algo do meu dominio para CI&Ters</li>
            <li>- Criar PoCs de tecnologias ou AIs que podem nos ajudar ou ajudar clientes no lado front-end</li>
          </ul>
        </div>
      </div>
      <RadarChartProgress />
    </Section>
  )
}
