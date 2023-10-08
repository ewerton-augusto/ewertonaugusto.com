import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";

export const SectionHome: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const Slide = () => (
    <motion.div
      variants={{
        hidden: { left: 0 },
        visible: { left: "100%" },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, ease: "easeIn" }}
      style={{
        position: "absolute",
        top: 4,
        bottom: 4,
        left: 0,
        right: 0,
        background: "#ed1840",
        zIndex: 20,
      }}
    />
  )

  return (
    <>
      <section className='w-full min-h-screen bg-home bg-cover bg-center'>
        <div className='w-full bg-red bg-opacity-10'>
          <div className='w-full mx-auto min-h-screen max-w-[1440px] max-sm:p-4 p-6 flex flex-col justify-between h-full'>
            <div className='flex items-center justify-between'>
              <div className='text-white text-opacity-90'>
                <h1 className='text-2xl'>
                  Processo de Desenvolvimento
                </h1>
                <p className='font-bold'>Outubro 2023</p>
              </div>
              <img src="/pdp/ciandt.png" alt="ci&t" className='h-10' />
            </div>
            <div className='w-full flex items-center justify-between gap-6 text-white max-md:flex-col-reverse '>
              <div className='w-full max-w-4xl max-md:text-center'>
                <div className='relative text-6xl font-extrabold mb-16'>
                  <Slide />
                  Hey, I am <span className='text-red brightness-150'>Ewerton</span>
                </div>
                <div className='relative text-2xl'>
                  <Slide />
                  Acredito que por onde passamos deixamos um pedacinho nosso, do que sentimos, pensamos e acreditamos,
                  e eu sou um pedacinho de cada momento que vivo, sou um pedaço de cada pessoa que passa de maneira
                  despretensiosa na minha vida e que tem o poder de me mostrar algo novo a partir de como elas veem o mundo,
                  cada experiência, cada sonho ainda não vivido.
                </div>
              </div>
              <div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    duration: 0.6, delay: 0.30
                  }}
                  className='w-full'
                >

                  <img src="/pdp/picture.png" alt="Ewerton" />
                </motion.div>
              </div>
            </div>
            <div className='mt-16 max-md:mx-auto'>
              <nav>
                <ul className='flex gap-6 items-center text-white font-bold'>
                  <li>
                    <a target='_blank' href="https://docs.google.com/spreadsheets/d/1qq0mwfq2PYmjtP06-SU4D4itP0OfOO7AJxyIoTD3RYc/edit#gid=1559308369">
                      <div className='px-2 py-1 border-white border-[1px] rounded-xl hover:bg-white hover:bg-opacity-20 shadow-xl min-w-[150px] text-center'>Ficha 7x7</div>
                    </a>
                  </li>
                  <li>
                    <a target='_blank' href="https://docs.google.com/spreadsheets/d/1qq0mwfq2PYmjtP06-SU4D4itP0OfOO7AJxyIoTD3RYc/edit#gid=1243017280">
                      <div className='px-2 py-1 border-white border-[1px] rounded-xl hover:bg-white hover:bg-opacity-20 shadow-xl min-w-[150px] text-center'>PDI</div>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.6, delay: 0.30
        }}
        className='w-full'
      >
        <section ref={ref} className='w-full mx-auto max-sm:p-4 p-6 my-20'>
          <img src="/pdp/pick.png" alt="Missão, visão e valores" className='mx-auto h-[200px]' />
          <div className='w-full h-auto flex max-md:flex-col justify-center items-start gap-8'>
            <div className='hover:scale-105 flex flex-col justify-center items-center flex-1 min-h-[260px] text-center max-md:w-full p-4 border-[1px] border-black border-opacity-20 rounded-xl shadow-xl bg-white bg-opacity-60'>
              <h2 className='text-red font-bold text-2xl mb-4'>Missão</h2>
              <p className='text-xl text-black font-semibold'>A minha missão é ajudar pessoas para que tenham qualidade de vida, através dos meus potenciais em comunicação, minhas capacidades técnicas em tecnologia, sendo transparente e íntegro sempre. </p>
            </div>
            <div className='hover:scale-105 flex flex-col justify-center items-center flex-1 min-h-[260px] text-center max-md:w-full p-4 border-[1px] border-black border-opacity-20 rounded-xl shadow-xl bg-white bg-opacity-60'>
              <h2 className='text-red font-bold text-2xl mb-4'>Valores</h2>
              <p className='text-xl text-black font-semibold'>Respeito - Honestidade - Contribuição - Liberdade - Crescimento Contínuo</p>
            </div>
            <div className='hover:scale-105 flex flex-col justify-center items-center flex-1 min-h-[260px] text-center max-md:w-full p-4 border-[1px] border-black border-opacity-20 rounded-xl shadow-xl bg-white bg-opacity-60'>
              <h2 className='text-red font-bold text-2xl mb-4'>Forças</h2>
              <p className='text-xl text-black font-semibold'>Perdão - Liderança - Amor - Esperança - Critério</p>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  )
}
