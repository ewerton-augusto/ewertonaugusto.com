import React from 'react';

export const SectionQA: React.FC = () => {
  return (
    <section className='w-full max-sm:p-4 p-6 min-h-screen flex items-center justify-center'>
      <div className='w-full mx-auto max-w-[1440px]'>
        <img src="/pdp/qa.png" alt="Q&A" className='w-full max-w-xs mx-auto' />
        <a target='_blank' href="https://forms.gle/sG4ajGoFKekALaF49">
          <div className='px-2 py-1 mt-20 border-red text-red border-[1px] w-full max-w-sm mx-auto rounded-xl hover:text-white hover:bg-red hover:bg-opacity-80 shadow-xl text-center'>Enviar Feedback da Apresentação</div>
        </a>
      </div>
    </section>
  )
}
