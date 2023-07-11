import React from 'react';
import Timeout from '../timeout/Timeout';

const SectionDueDate: React.FC = () => {
  return (
    <>
      <div>
        <img src="/birthday/rip-20s.gif" alt="RIP 20's" className='w-full mx-auto' />
      </div>
      <div>
        <p>Contagem regressiva para o even<span className='font-bold text-purple'>ton</span></p>
        <p className='font-semibold'>20 à 22 de Outubro de 2023</p>
        <Timeout />
      </div>
      <div>
        <h2 className='font-bold my-4'>Prazos máximos</h2>
        <div>
          <p>Confirmar sua presença ilustre: <span className='font-semibold'>29/09/2023</span></p>
          <p>Transferir divisão dos custos: <span className='font-semibold'>06/10/2023</span></p>
        </div>
      </div>
    </>
  )
}

export default SectionDueDate;