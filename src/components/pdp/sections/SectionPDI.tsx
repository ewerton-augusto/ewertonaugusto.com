import React from 'react';
import Title from '../Title';

const TH = ({ children }) => <th className='px-2 py-1 text-center'>{children}</th>
const TD = ({ children, className = '' }) => <td className={`max-lg:w-full px-2 py-1 text-center border-b-[1px] border-white border-opacity-40 ${className}`}>{children}</td>

export const SectionPDI: React.FC = () => {
  return (
    <section className='w-full max-sm:p-4 p-6 min-h-screen flex items-center justify-center bg-red bg-opacity-70 text-white '>
      <div className='w-full mx-auto max-w-[1440px] py-20'>
        <Title color='white'>PDI [Julho 2022 - Anterior]</Title>
        <table className='w-full mb-20'>
          <thead>
            <tr className='border-b-[1px] max-lg:hidden'>
              <TH>Resultados</TH>
              <TH>Meta</TH>
              <TH>Específica</TH>
              <TH>Mensurável</TH>
              <TH>Alcançável</TH>
              <TH>Relevante</TH>
              <TH>Temporal</TH>
            </tr>
          </thead>
          <tbody className='max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center'>
            {oldGoals.map((goal, index) => (
              <tr key={index} className='w-full max-lg:flex max-lg:justify-center max-lg:items-center max-lg:flex-col max-lg:p-4 max-lg:border-2 max-lg:rounded-lg max-lg:my-4'>
                <TD className='bg-white bg-opacity-10 text-black'>{goal.resultados}</TD>
                <TD className='font-bold'>{goal.meta}</TD>
                <TD>{goal.especifica}</TD>
                <TD>{goal.mensuravel}</TD>
                <TD>{goal.alcancavel}</TD>
                <TD>{goal.relevante}</TD>
                <TD>{goal.temporal}</TD>
              </tr>
            ))}
          </tbody>
        </table>
        <Title color='white'>PDI [Outubro 2023]</Title>
        <table className='w-full'>
          <thead>
            <tr className='border-b-[1px] max-lg:hidden'>
              <TH>Meta</TH>
              <TH>Específica</TH>
              <TH>Mensurável</TH>
              <TH>Alcançável</TH>
              <TH>Relevante</TH>
              <TH>Temporal</TH>
            </tr>
          </thead>
          <tbody className='max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center'>
            {goals.map((goal, index) => (
              <tr key={index} className='w-full max-lg:flex max-lg:justify-center max-lg:items-center max-lg:flex-col max-lg:p-4 max-lg:border-2 max-lg:rounded-lg max-lg:my-4'>
                <TD className='font-bold'>{goal.meta}</TD>
                <TD>{goal.especifica}</TD>
                <TD>{goal.mensuravel}</TD>
                <TD>{goal.alcancavel}</TD>
                <TD>{goal.relevante}</TD>
                <TD>{goal.temporal}</TD>
              </tr>
            ))}
          </tbody>
        </table>
        <img src="/pdp/plan.png" alt="PDI" className='mx-auto w-full max-w-sm mt-20' />
      </div>
    </section>
  )
}

const goals = [
  {
    "meta": "Compartilhar Conhecimento",
    "especifica": "Compartilhar conhecimento em áreas de minha expertise, como Frontend no geral e Team work (React, estilos, comunicação entre times front-end, design e backend)",
    "mensuravel": "Apresentações/workshops em 2 grupos menores/mês e 1 grupo maior/trimestre",
    "alcancavel": "Reservar tempo para preparação e prática",
    "relevante": "Melhorar colaboração na equipe",
    "temporal": "Iniciar no 1º mês, continuando pelos 6 meses"
  },
  {
    "meta": "Focar em Acessibilidade na Web",
    "especifica": "Focar em acessibilidade",
    "mensuravel": "Novos projetos com pelo menos 50% de conformidade com WCAG 2.1",
    "alcancavel": "Estudar diretrizes de acessibilidade e fazer auditorias",
    "relevante": "Incluir todas as pessoas",
    "temporal": "Implementar diretrizes imediatamente, aprimorar, e continuar pelos 6 meses"
  },
  {
    "meta": "Melhorar Performance no Frontend",
    "especifica": "Aumentar a performance no frontend",
    "mensuravel": "Aumentar PageSpeed Insights em pelo menos 20 pontos",
    "alcancavel": "Estudar cache e CDN, implementar em projetos",
    "relevante": "Melhorar experiência do usuário",
    "temporal": "Implementar melhorias gradualmente, continuando pelos 6 meses"
  },

  {
    "meta": "Cross-Browser Compatibility Testing",
    "especifica": "Realizar testes de compatibilidade",
    "mensuravel": "Certificar-se de compatibilidade com Chrome, Firefox, Safari, Edge em projetos reais",
    "alcancavel": "Implementar estratégia de testes e testar regularmente em PoC e projetos reais",
    "relevante": "Satisfação do cliente, maior cobertura de usuários",
    "temporal": "Implementar testes de compatibilidade imediatamente, continuando pelos 6 meses"
  },
  {
    "meta": "Pipelines CI/CD - Git Actions",
    "especifica": "Aprender e implementar ferramentas DevOps CI/CD inicialmente para webapps",
    "mensuravel": "Implementar pelo menos em 1 projeto real e 3 de estudos usando Git Actions e pipelines CI/CD",
    "alcancavel": "Dedicação semanal ao aprendizado e colaboração, um dia da semana para estudos e prática por 1-2h",
    "relevante": "Melhorar eficiência e qualidade do desenvolvimento e ter entregas continuas",
    "temporal": "Começar a aprender e implementar imediatamente, continuando pelos 6 meses"
  }
];

const oldGoals = [
  {
    "resultados": "Os aprendizados em Vue3 e Nuxt foram essencias para entregas nos projetos da College House, e além disso, criei PoCs e atuei em um freelance utilizando o Nuxt. Atualmente tenho desempenhado um ótimo papel utilizando TS, sabendo usar as tipagens corretas, types e interfaces, e além disso extender types necessários. Estou utilizando o TS no meu dia-a-dia atualmente. Por último, nos projetos atuais tenho escrito testes unitários utilizando o Jest e também fazendo a implementação e configuração do mesmo.",
    "meta": "1. Estudos em Vue 3 e Testes",
    "especifica": "Estudar Vue 3, TypeScript e Testes unitários para aplicar em projeto em transição para Vue 3.",
    "mensuravel": "Progresso nos estudos e aplicação prática em projetos.",
    "alcancavel": "Dedicar tempo diariamente aos estudos e projetos pessoais.",
    "relevante": "Contribuir para o sucesso da transição para Vue 3 no projeto atual.",
    "temporal": "3 meses.",
  },
  {
    "resultados": "Não tirei a certificação mencionada, mas tenho feito treinamentos na plataforma Alura, e além disso tenho acessos ao ambientes da PSS, onde, redava manualmente a pipeline de deploy em QA, acesso para gerenciar informações de rede, aos bancos de dados e máquinas EC2. Tirar o certificado ainda esta no plano, já que atualmente estou tento contato com o ambiente AWS do cliente",
    "meta": "2. Certificação AWS Certified Cloud Practitioner",
    "especifica": "Aprender e obter a certificação AWS Certified Cloud Practitioner em até 4 meses.",
    "mensuravel": "Obtenção da certificação e aplicação de conhecimentos em projetos AWS.",
    "alcancavel": "Utilizar recursos da ci&t university e centaurus training program para aprendizado.",
    "relevante": "Fortalecer os conhecimentos em AWS para melhorar o projeto atual.",
    "temporal": "4 meses.",
  },
  {
    "resultados": "Estou ativamente colaborando nos backlogs e boards dos projetos que tenho atuado, criando tasks, stories, e ajudando também no Acceptance Criteria dos mesmos. Em conjunto fiz treinamentos de Kanban, sabendo montar boards, métricas e outros. O mesmo ajudou na orientação de estágiários na CI&T, no Tomorrow Talents e retros de projetos com a SK.",
    "meta": "3. Certificação de Scrum",
    "especifica": "Aprofundar conhecimentos em Scrum e obter a certificação em até 6 meses.",
    "mensuravel": "Obtenção da certificação Scrum e aplicação efetiva no projeto atual.",
    "alcancavel": "Utilizar recursos do centaurus training para preparação e estudos.",
    "relevante": "Melhorar a colaboração e eficiência no uso do Scrum no projeto.",
    "temporal": "6 meses.",
  },
  {
    "resultados": "Tenho compatilhado bastante meus conhecimentos em frontend e softskill com pessoas, como nossa antiga Junior Erika, nossos antigos estágiarios Michel e Gabriel Bill e também com as pessoas do Tomorrow talents. Além de compartilhar, tenho aprendido muito! Nesse momento estou em busca de uma nova pessoa para ajudar em sua jornada!",
    "meta": "4. Atuar como Career Advisor",
    "especifica": "Identificar e formar novos sucessores atuando como um Career Advisor.",
    "mensuravel": "Identificar e orientar pelo menos um novo membro da equipe como sucessor.",
    "alcancavel": "Dedicar tempo para orientar e desenvolver outros membros da equipe.",
    "relevante": "Contribuir para a continuidade do sucesso da equipe.",
    "temporal": "Contínuo.",
  }
];