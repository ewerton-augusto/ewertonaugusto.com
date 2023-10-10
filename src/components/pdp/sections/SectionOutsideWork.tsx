import React from 'react';
import Title from '../Title';
import SubTitle from '../SubTitle';

export const SectionOutsideWork: React.FC = () => {
  return (
    <section className='w-full max-sm:p-4 p-6 min-h-screen flex items-center justify-center bg-red bg-opacity-70 text-white'>
      <div className='w-full mx-auto max-w-[1440px]'>
        <Title color='white'>Outside of work</Title>
        <SubTitle className='text-white my-12 text-center'>- Cursos Finalizados recentemente -</SubTitle>
        <ul className='flex justify-around items-center flex-wrap gap-8'>
          <li>
            <img src="/pdp/curso-react.jpg" alt="" className='w-auto max-h-36 rounded-lg mx-auto' />
            <a href="https://cursos.alura.com.br/user/ewertonsantos22/course/react-js-testes-automatizados-front-end/certificate" target='_blank'>
              <div className='text-center mt-4'>
                React - Testing in Library / Jest
              </div>
            </a>
          </li>
          <li>
            <img src="/pdp/curso-next.jpg" alt="" className='w-auto max-h-36 rounded-lg mx-auto' />
            <a href="https://cursos.alura.com.br/user/ewertonsantos22/course/nextjs-autenticacao-gerenciamento-tokens/certificate" target='_blank'>
              <div className='text-center mt-4'>
                NextJS - Auth SSR / SSG - Gerenciando JWT Tokens
              </div>
            </a>
          </li>
          <li>
            <img src="/pdp/curso-kanban.jpg" alt="" className='w-auto max-h-36 rounded-lg mx-auto' />
            <a href="https://cursos.alura.com.br/user/ewertonsantos22/course/kanban-evolua-entregas-metricas/certificate" target='_blank'>
              <div className='text-center mt-4'>
                Kanban - Métricas
              </div>
            </a>
          </li>
          <li>
            <img src="/pdp/curso-aws.jpg" alt="" className='w-auto max-h-36 rounded-lg mx-auto' />
            <a href="https://cursos.alura.com.br/user/ewertonsantos22/course/aws-certified-cloud-practitioner-domain-1-e-2/certificate" target='_blank'>
              <div className='text-center mt-4'>
                AWS - Domains 1 e 2
              </div>
            </a>
          </li>
        </ul>
        <SubTitle className='text-white my-12 text-center'>- Cursos em Andamento - </SubTitle>
        <ul className='flex items-center justify-around flex-wrap'>
          <li>[Alura] Comunicação Assertiva</li>
          <li>[Alura] React: Testes com Cypress</li>
          <li>[Alura] CI/CD para Front-end - Github Actions</li>
        </ul>
        <SubTitle className='text-white my-12 text-center'>- Eventos - </SubTitle>
        <div className='flex items-center justify-center gap-8 text-center'>
          <div className='max-lg:w-full w-1/3'>Front in Sampa set/2022</div>
          <div className='max-lg:w-full w-1/3'>Front in Sampa set/2023</div>
          <div className='max-lg:w-full w-1/3'>Coding in the Dark set/2022</div>
        </div>
        <img src="/pdp/frontin.jpg" alt="" className='rounded-lg w-auto max-h-56 mx-auto mb-4 mt-4' />
        <SubTitle className='text-white my-12 text-center'>Freelances</SubTitle>
        <div className='flex items-center justify-center gap-8 text-center'>
          <div className='max-lg:w-full w-1/2'>
            <a href="https://augeplus.com.br/" target='_blank'>
              <img src="/pdp/auge.jpg" alt="Auge" className='rounded-lg w-auto max-h-36 mx-auto mb-4' />
              <div>Auge Plus [Nuxt3 - Vue SSR]</div>
            </a>
          </div>
          <div className='max-lg:w-full w-1/2'>
            <a href="https://kzenglish.com.br/" target='_blank'>
              <img src="/pdp/kz.jpg" alt="KZ" className='rounded-lg w-auto max-h-36 mx-auto mb-4' />
              <div>KZ English School [HTML5 - CSS3 - JS Vanilla]</div>
            </a>
          </div>
        </div>
        <SubTitle className='text-white my-12 text-center'>Comunidade</SubTitle>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex items-center gap-4'>
            <p className=''>
              Mentor - Victor Kurauchi:
            </p>
            <a href="https://www.linkedin.com/in/victorkurauchi/" target="_blank" rel="noopener noreferrer" className='ml-4 underline'>
              <div>
                LinkedIn
              </div>
            </a>
          </div>
          <div>
            <p>Mentorado - Aline Ribeiro</p>
          </div>
        </div>
        <SubTitle className='text-white my-12 text-center'>Outros</SubTitle>
        <div className='flex items-center justify-center'>
          <p className='mr-4'>Site pessoal em andamento [NextJS]:</p> <a href="https://www.figma.com/file/44t2egvSsqYdO1k8IpyyjS/ewertonaugusto.com?type=design&node-id=101-24&mode=design&t=ItColtfUg7Q7V2D2-0" target='_blank' className='underline'>Figma Design</a>
        </div>
      </div>
    </section>
  )
}
