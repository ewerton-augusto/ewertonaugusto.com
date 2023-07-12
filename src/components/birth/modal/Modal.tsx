import React from 'react';

type ModalProps = {
  isOpen: boolean;
  hideButton: boolean;
  title: string;
  link: string;
  children: React.ReactNode | string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  link,
  children,
  hideButton,
}) => {
  return (
    isOpen && (
      <div className='fixed top-0 left-0 w-screen h-screen z-40 bg-dark-purple bg-opacity-90 flex justify-center items-center p-4' id='modal'>
        <div className='w-full max-w-[520px] h-auto max-h-[600px] rounded shadow bg-white p-4 m-4'>
          <div className='flex justify-between items-center'>
            <h1 className='text-black text-xl font-bold capitalize'>{title}</h1>
            <button onClick={onClose} className='w-10 h-10 rounded-full border-2 border-dark-purple hover:text-white hover:bg-dark-purple'>X</button>
          </div>
          <div className='my-2'>
            {children}
          </div>
          {
            !hideButton && (
              <a href={link} target='_blank'>
                <div className='bg-dark-purple rounded-xl border-2 border-purple px-4 py-2 text-white text-center font-semibold hover:opacity-90'>
                  Acessar {title}
                </div>
              </a>
            )
          }
        </div>
      </div>
    )
  )
}

export default Modal;
