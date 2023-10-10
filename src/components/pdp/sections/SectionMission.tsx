import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";

export const SectionMission: React.FC = () => {
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
  )
}
