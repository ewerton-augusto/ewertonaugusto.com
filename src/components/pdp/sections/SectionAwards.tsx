import React, { useEffect, useRef } from 'react';
import Section from '../Section';
import Title from '../Title';
import SubTitle from '../SubTitle';
import { motion, useInView, useAnimation } from "framer-motion";

export const SectionAwards: React.FC = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) mainControls.start("visible");
  }, [isInView]);

  return (
    <Section className='flex items-center justify-center my-20'>
      <div className='w-full'>
        <Title>CI&T Awards</Title>
        <img src="/pdp/awards.png" alt="awards" className='w-full max-w-[180px] mx-auto mb-6' />
        <SubTitle className='text-center my-12'>PDP Julho 2022 [Anterior]</SubTitle>
        <div className='flex justify-around items-center gap-6 flex-wrap'>
          {awardsOld.map((award, index) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={mainControls}
              transition={{
                duration: 0.6, delay: Number(`0.4${index}`)
              }}
              key={award.title}
              className='w-full max-w-[250px]'
            >
              <div title={award.content} className='hover:scale-105 w-full flex flex-col gap-2 justify-center items-center p-4 rounded-xl border-[1px] border-red border-opacity-40 shadow-xl'>
                <img src={award.img} alt={award.title} className='w-10 h-10 mb-4 shadow-xl rounded-full' />
                <div className='text-red text-opacity-70 font-bold'>{award.title}</div>
                <div className='text-base'>{award.date}</div>
              </div>
            </motion.div>
          ))}
        </div>
        <SubTitle className='text-center my-12'>PDP Outubro 2023</SubTitle>
        <div ref={ref} className='flex justify-around items-center gap-6 flex-wrap'>
          {awards.map((award, index) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={mainControls}
              transition={{
                duration: 0.6, delay: Number(`0.${5 + index + 1}0`)
              }}
              key={award.content}
              className='w-full max-w-[250px]'>
              <div
                title={award.content}
                className='hover:scale-105 w-full flex flex-col gap-2 justify-center items-center p-4 rounded-xl border-[1px] border-red border-opacity-40 shadow-xl'>
                <img src={award.img} alt={award.title} className='w-10 h-10 mb-4 shadow-xl rounded-full' />
                <div className='text-red text-opacity-70 font-bold'>{award.title}</div>
                <div className='text-base'>{award.date}</div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </Section>
  )
}

const awards = [
  {
    title: "Client Satisfaction",
    img: "/pdp/client-satisfaction.jpg",
    date: "ago, 04 2022",
    content: `Chris, Ton and Alan had a great feedback from the customer! They received a challenge to deliver a feature in around two weeks in a complete new stack for them. They learned the stack and managed to deliver the feature which the customer requested int he time needed. Thanks so much team for the effort and dedication to accomplish what was presented to you! You guys rocked!`,
  },
  {
    title: "Teamwork",
    img: "/pdp/teamwork.jpg",
    date: "nov, 28 2022",
    content: `Your contributions to the team have been great. The commitment you show on a daily basis helps us move faster and is a good example of our team culture. Thank you for being such a good teammate!`,
  },
  {
    title: "Team Highlight",
    img: "/pdp/team-highlight.jpg",
    date: "mar, 17 2023",
    content: `Stable Kernel Team has made the Impossible possible by delivering the PPS¿ Wave Project. This Project consists of a Social Network in which Athletes, Non-Governamental Organizations, Hospitals and Clinical Facilities can connect and organize fundraising, donation aids and solidarity work. The deadline for its delivery was unyielding and collaboration was challenging, as there were different levels of stakeholders from both Stable Kernel and PPS. However, the Team was able to deliver a solid Product! Big thanks and kudos to Leonardo Sant¿Anna, Ewerton Santos, Alan Souza, Bianca Araújo Guilherme Braga!`,
  },
  {
    title: "Team Highlight",
    img: "/pdp/team-highlight.jpg",
    date: "ago, 21 2023",
    content: `Congratulations to the team for the brilliant performance on the project! You not only achieved incredible results, but you also transformed the customer impression in a spectacular way. The feedbacks are proof of your positive impact, commitment, skill, and dedication. We are all delighted with this success, which results from exceptional teamwork. Let's keep it up, inspiring and exceeding expectations!`,
  },
]

const awardsOld = [
  {
    title: "Teamwork",
    img: "/pdp/teamwork.jpg",
    date: "mai, 18 2022",
    content: `O time da Stable Kernel é total team work. Com o trabalho em equipe desse time construímos uma relação de confiança
    com o cliente que tem nos possibilitado aumentar o time. O feedback do cliente é sempre como é bom trabalhar com o nosso time
    e quanto de valor o nosso time agrega ao seu squad. As características desse time é resiliência, colaboração e contribuição. 
    Mesmo quando não em projetos o time busca se ajudar e auxiliar a stable em projetos internos, mostrando resiliência em se adaptar
    a diferentes contextos. Agradecer todo o esforço do time em fazer da stable um grande parceiroe alçar outros vôos lá dentro.`,
  }
]
