import React, { useState } from 'react';
import Modal from '../modal/Modal';
import { useRouter } from 'next/router';

type BirthHeaderProps = {
  showLoginLink?: boolean;
  className?: string;
  guests?: any[];
};

const BirthHeader: React.FC<BirthHeaderProps> = ({ showLoginLink, className, guests }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [guestLogin, setGuestLogin] = useState("");
  const router = useRouter();

  const handleSumitGuest = () => {
    const guestExists = guests.find((guest) => guest.name.toLowerCase() === guestLogin.toLowerCase());

    if (!guestExists) {
      alert("Não localizado!");
      return;
    }
    router.push({
      pathname: "/birthday-2023/detalhes/",
      query: {
        id: guestExists.id
      }
    }, "/birthday-2023/detalhes");
  }

  return (
    <>
      <header className={`w-full fixed top-0 left-0 p-6 flex flex-wrap items-center justify-between gap-4 ${className}`}>
        <div className='flex gap-3 justify-start items-center'>
          <i className='icon-cake-candles-solid text-purple text-4xl'></i>
          <h1 className='text-[40px] font-bold text-white'>30Ton</h1>
        </div>
        {
          showLoginLink && (
            <div className='text-white text-base font-bold'>
              <div>
                Já confirmou sua presença anteriormente?
              </div>
              <div onClick={() => setIsModalOpen(true)} className='px-4 py-2 rounded-md bg-purple hover:opacity-90 mt-2 text-white text-center hover:underline'>
                Acessar Dashboard
              </div>
            </div>
          )
        }
      </header>
      <Modal
        title='Acessar Informações'
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        link=''
        hideButton>
        <p>Para acessar as informações após confirmação da presença, preencha o seu nome ou apelido que foi utilizado na confirmação!</p>
        <input id="guest"
          type="text"
          name="guest"
          className='w-full h-10 p-2 rounded-lg outline-dark-purple border-2 border-purple pb-3 text-black my-4'
          value={guestLogin}
          onChange={(e) => setGuestLogin(e.target.value)}
          placeholder='Nome ou apelido confirmado'
        />
        <button onClick={handleSumitGuest} className='w-full bg-dark-purple rounded-xl border-2 border-purple px-4 py-2 text-white text-center font-semibold hover:opacity-90'>
          Acessar dashboad
        </button>
      </Modal>
    </>
  )
}

export default BirthHeader;
