import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const R2Icon = () => (
  <img src='https://lh5.googleusercontent.com/-tkRSCxlZbh4/AAAAAAAAAAI/AAAAAAAAAAA/pg5bcaQ88uw/s96-w44-h44-p-k-no-ns-nd/photo.jpg' className='w-full rounded-full' />
)

const CITIcon = () => (
  <img src='data:image/png;base64,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' className='w-full rounded-full' />
)

const InitialIcon = () => (
  <img src='https://img.freepik.com/vetores-premium/icone-do-foguete-da-nave-espacial-do-estilo-dos-desenhos-animados-3d_567896-228.jpg' className='w-full rounded-full' />
)

const Card = ({
  title,
  subtitle,
  children
}) => (
  <div className='text-black'>
    <h3 className="vertical-timeline-element-title font-bold">{title}</h3>
    <h4 className="vertical-timeline-element-subtitle font-medium">{subtitle}</h4>
    {children}
  </div>
)

const Timeline: React.FC = () => {
  /* clientes, projetos, challenges */
  return (
    <VerticalTimeline lineColor='white'>

      <VerticalTimelineElement date="2023" icon={<CITIcon />}>
        <Card title="Mid-level Software Developer" subtitle="CI&T">
          <p>Iniciei o ano de 2023 com um grande desafio que foi a recontrução do MVP da Waves junto a SK e CI&T. Algo significativo pois ajudou a restaurar a confiança do cliente.</p>
          <p>Atualmente estou atuando em um novo projeto para a Gozio, na construção de uma web app para pacientes navegarem nos campus dos hospitais. Projeto com grandes desafios no front-end, onde sigo construindo um forte relacionamento com o cliente e evoluindo tecnicamente.</p>
          <div>
            <p>Cliente:</p>
            <div className='flex items-center justify-center gap-6 pt-6'>
              <img
                src="https://assets.agencyspotter.com/uploads/agency_image/image/27967/resized_SK_logo_Pantone_jpg.jpg"
                alt="Stable Kernel"
                className='w-auto h-12'
              />
            </div>
          </div>
        </Card>
      </VerticalTimelineElement>

      <VerticalTimelineElement date="2022" icon={<CITIcon />}>
        <Card title="Junior/Mid-level Software Developer" subtitle="CI&T">
          <p>Após iniciei no projeto Rinnai na Stable Kernel, e logo em seguida fui realocado para o projeto College House onde entrei em um momento de redesign e pude colaborar com uma entrega importante para o cliente dentro de um prazo apertado com uma tecnologia nova para mim.</p>
          <p>Ao finalizar os projetos para o cliente final College House, fui realocado para um novo desafio, a construção de um MVP para o cliente PPS chamado Waves, onde, atuei com foco no front-end na construção de uma rede social para causa beneficentes com apoio de ligas esportivas dos USA.</p>
          <p>No meio do ano me tornei um desenvolvedor Pleno!!!</p>
          <div>
            <p>Clientes:</p>
            <div className='flex items-center justify-center gap-6 pt-6'>
              <img
                src="data:image/png;base64,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"
                alt="Rinnai"
                className='w-auto h-6'
              />
              <img
                src="https://assets.agencyspotter.com/uploads/agency_image/image/27967/resized_SK_logo_Pantone_jpg.jpg"
                alt="Stable Kernel"
                className='w-auto h-12'
              />
            </div>
          </div>
        </Card>
      </VerticalTimelineElement>

      <VerticalTimelineElement date="2021" icon={<CITIcon />}>
        <Card title="Junior Software Developer" subtitle="CI&T">
          <p>Cheguei para atuar na Verus bem no início do projeto, fase de sprint 0, consegui contribuir bastante nas definições de padrões para o frontend, na organização e documentação da solução. Enfrentei junto ao time diversos desafios quanto a prazos e requisitos de negócio. </p>
          <div>
            <p>Cliente:</p>
            <div className='flex items-center justify-center gap-6 pt-6'>
              <img src="/pdp/clients/verus.png" alt="verus" className='w-auto h-20' />
            </div>
          </div>
        </Card>
      </VerticalTimelineElement>

      <VerticalTimelineElement date="2020 - 2021" icon={<R2Icon />}>
        <Card title="Full-stack Developer" subtitle="R2SIS">
          <p>Mudança de papel para Desenvolvedor full-stack web.</p>
          <p>Comecei a trabalhar colocando a mão em códigos, participando de todo o ciclo do desenvolvimento das soluções web.</p>
          <p>O time era pequeno e mesmo sem muitos conhecimentos técnicos atuei como responsável do time de desenvolvimento por um período de 1 ano e meio.</p>
          <div>
            <p>Clientes:</p>
            <div className='flex items-center justify-center gap-6 pt-6'>
              <img src="/pdp/clients/deca.png" alt="deca" className='w-auto h-8' />
              <img src="/pdp/clients/semcon.png" alt="semcon" className='w-auto h-8' />
              <img src="/pdp/clients/afry.jpg" alt="afry" className='w-auto h-8' />
            </div>
          </div>
        </Card>
      </VerticalTimelineElement>

      <VerticalTimelineElement date="2017 - 2020" icon={<R2Icon />}>
        <Card title="Technical Coordinator" subtitle="R2SIS">
          <p>
            Saída de um cenário de suporte técnico para um papel de liderança de pessoas.
          </p>
          <p>
            Período mais desafiador que enfrentei e que gerou grandes resultados como melhor comunicação, colaboração com as pessoas, liderar pelo exemplo, motivar pessoas, e o trabalho em equipe.
          </p>
        </Card>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="..."
        iconStyle={{ background: 'rgb(97, 172, 123)', color: '#fff' }}
        icon={<InitialIcon />}
      />
    </VerticalTimeline>
  )
}

export default Timeline;