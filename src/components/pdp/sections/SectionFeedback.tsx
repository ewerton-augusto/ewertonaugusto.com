import React from 'react';
import Title from '../Title';
import Depoiment from '../Depoiment';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const SectionFeedback: React.FC = () => {
  return (
    <section className='w-full max-sm:p-4 p-6 min-h-screen flex items-center justify-center bg-red bg-opacity-70 text-white'>
      <div className='w-full mx-auto max-w-[1440px]'>
        <Title color='white'>Feedback</Title>
        <div className='flex items-center justify-center mt-20'>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 5000,
            }}
          >
            {depoimentos.map((depoimento, index) => (
              <SwiperSlide key={depoimento.quote} virtualIndex={index}>
                <Depoiment
                  quote={depoimento.quote}
                  author={depoimento.author}
                  img={depoimento.img}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <img src="/pdp/feedback.png" alt="feedback" className='w-full max-w-[200px] mx-auto opacity-95' />
      </div>
    </section>
  )
}

export default SectionFeedback;

const depoimentos = [
  {
    img: '/pdp/avatar-4.jpg',
    quote: "Ton is very communicative - he always lets people know how things are going and if he has any issues. He also really cares about the people he works with and engages the team in friendly conversation, which makes the work more enjoyable.",
    author: "Ginger Boyll - Director of Technical Engagement - SK",
  },
  {
    img: '/pdp/avatar-2.jpg',
    quote: "When needed you stayed with the team to help with the deliveries, with high quality and showing a big commitment to the team.",
    author: "Heloise Magaton - SL",
  },
  {
    img: '/pdp/avatar-4.jpg',
    quote: "Continuing to be our reference within SK team, very collaborative, helping others grow",
    author: "Roberta - Senior Manager",
  },
  {
    img: '/pdp/avatar-1.jpg',
    quote: "Absolutamente, muito participativo nos encontros que participo e sempre se coloca à disposição para iniciativas que possam contribuir com demais pessoas.",
    author: "Jon Rodrigues - SL",
  },
  {
    img: '/pdp/avatar-3.jpg',
    quote: "You have a good understanding of the project context. You are good at fixing bugs that are truly front-end bugs and good at delegating a bug ticket to the backend where appropriate",
    author: "Jesse Black - Principal Architect - SK",
  },
  {
    img: '/pdp/avatar-2.jpg',
    quote: "Ton eu admiro muito sua proatividade e seu empenho nas tasks. Percebo que você realmente se entrega no que faz, busca entregar o código com qualidade e buscando boas soluções. Gosto como participa das discussões propondo soluções e com provocações construtivas",
    author: "Bianca Marcelo - QA",
  },
  {
    img: '/pdp/avatar-3.jpg',
    quote: "Seu conhecimento anterior do projeto Wave ajudou o time devido à pessoas novas terem se juntado durante essa força-tarefa. Você sempre se demonstrou disposto a ajudar quem precisasse.",
    author: "Leo Santana - Dev Master",
  },
]