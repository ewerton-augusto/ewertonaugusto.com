import React from 'react';

type DepoimentProps = {
  quote: string;
  author: string;
  img: string;
}

const Depoiment: React.FC<DepoimentProps> = ({
  quote,
  author,
  img
}) => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <img src={img} alt={author} className='w-36 h-36 rounded-full border-white border-[1px] border-opacity-90 shadow-2xl mb-8' />
      <p className='p-4 text-white text-2xl text-opacity-80 mb-10 text-center'>
        "{quote}"
      </p>
      <div className='text-3xl text-white text-opacity-70 font-extrabold'>
        {author}
      </div>
    </div>
  )
}

export default Depoiment;
