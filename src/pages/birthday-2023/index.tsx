import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import GlobalLayout from '../../layout/GlobalLayout';
import BirthHeader from '../../components/birth/header/Header';
import { LocalStorageEnum } from '../../enum/localStorageEnum';

const BirthdayHome: React.FC<{ password: string }> = ({ password }) => {
  const router = useRouter();
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = () => {
    if (answer.toLocaleLowerCase() === password) {
      localStorage.setItem(LocalStorageEnum.EAS_BIRTHDAY_2023_QUIZZ, "passed");
      router.push("/birthday-2023/confirmar");
    } else {
      setError(true);
      setAnswer("");
      inputRef.current.focus();
      setTimeout(() => setError(false), 5000)
    }
  }
  
  const handleSubmitEnter = (event) => (event.keyCode === 13) && handleSubmit();
  
  useEffect(() => {
    localStorage.removeItem(LocalStorageEnum.EAS_BIRTHDAY_2023_QUIZZ);
    inputRef.current.focus();
  }, []);

  return (
    <GlobalLayout>
      <div className='relative w-screen h-screen px-6'>
        <img src="/birthday/home-background.jpg" alt="Background" className='w-full h-full object-cover absolute top-0 left-0 -z-20' />
        <div className='w-full h-full bg-black opacity-80 absolute top-0 left-0 -z-20'></div>
        <BirthHeader />
        <section className='flex items-center justify-center h-full w-full'>
          <div className='w-full max-w-3xl'>
            <label htmlFor='answer' className='text-white max-sm:text-3xl text-5xl font-bold'>
              <span className='text-purple'>Quem </span>nunca para de <span className='text-purple'> crescer </span>?
            </label>
            <div className='relative w-full mt-4'>
              <input
                id="answer"
                type="text"
                name="response"
                className='w-full h-10 p-2 pr-[130px] rounded-lg outline-purple border-2 border-purple pb-3'
                onChange={(e) => setAnswer(e.target.value)}
                onKeyUp={handleSubmitEnter}
                value={answer}
                ref={inputRef}
              />
              <button className='absolute text-white bg-purple right-0 w-[120px] p-2 h-10 rounded-r-lg font-bold' onClick={handleSubmit}>Responder</button>
              {error && <div className='absolute -bottom-10 text-white'>Erroooou! Por favor, tente novamente. </div>}
            </div>
          </div>
        </section>
        <iframe className="fixed bottom-1 right-2 sm:bottom-6 sm:right-6 rounded-xl w-[290px]" src="https://open.spotify.com/embed/track/6LmhUHcxKbESf0b1MRjvlB?utm_source=generator&theme=0" height="90" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </GlobalLayout>
  );
}

export default BirthdayHome;

export async function getStaticProps() {
  const password = process.env.ANSWER_QUIZZ;
  return {
    props: {
      password,
    }
  }
}
