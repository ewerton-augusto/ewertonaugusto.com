import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import GlobalLayout from '../../layout/GlobalLayout';
import BirthHeader from '../../components/birth/header/Header';
import SimpleCard from '../../components/birth/cards/SimpleCard';
import { LocalStorageEnum } from '../../enum/localStorageEnum';
import SectionDueDate from '../../components/birth/sections/SectionDueDate';

const BirthdayConfirm: React.FC<{ guests: any[], apiURL: string }> = ({ guests, apiURL }) => {
  const router = useRouter();
  const [guest, setGuest] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const localToken = localStorage.getItem(LocalStorageEnum.EAS_BIRTHDAY_2023_QUIZ);
    if (localToken && localToken === "passed") {
      setIsLoading(false);
      return;
    }
    router.push("/birthday-2023");
  }, []);

  const handleSubmit = async () => {
    try {
      const currentDate = new Date();
      const dueDate = new Date('September 30, 2023 00:00:00');

      if (currentDate < dueDate) {

        if (guests.length >= 14) {
          setMessage("Lista cheia, sorry! Me chama no whats");
          setError(true);
          return;
        }

        if (guest && guest.trim() !== "") {

          const exists = guests.find((g) => g.name === guest.toLowerCase());
          if (exists) {
            setMessage("Nome / apelido já adicionado! Tente outro");
            setError(true);
            return;
          }

          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: guest.toLowerCase() })
          };

          const response = await fetch(`${apiURL}/guests`, requestOptions);
          const addGuest = await response.json();
          if (addGuest) router.push({
            pathname: "/birthday-2023/detalhes/",
            query: {
              id: addGuest.id
            }
          }, "/birthday-2023/detalhes");
        }

      } else {
        setMessage("Acabou o prazo my friendy! Me chama no whats.");
        setError(true);
      }
    } catch (error) {
      console.error(error);
      setMessage("Ocorreu um erro, tente novamente.");
      setError(true);
    }
  }

  const handleSubmitEnter = (event: any) => (event.keyCode === 13) && handleSubmit();

  useEffect(() => {
    error && setTimeout(() => setError(false), 5000)
  }, [error])

  return (
    <GlobalLayout>
      <div className='w-full min-h-screen px-6 bg-black'>
        {
          isLoading ? (
            <>
              <BirthHeader />
              <div className='w-full h-screen flex items-center justify-center text-purple text-2xl font-semibold'>
                Loading...
              </div>
            </>
          ) : (
            <>
              <BirthHeader showLoginLink className='bg-black' guests={guests} />
              <section className='flex justify-between items-start flex-wrap text-white text-xl pt-[150px]'>
                <div className='w-full lg:w-1/2 max-2xl:mx-auto'>
                  <div className='w-full flex flex-col gap-4 justify-start items-start'>
                    <p>Hello my friend, espero que esteja bem! Difícil a charada? hehe</p>
                    <p>Esse ano completo os tão famosos <span className='text-purple font-extrabold'>30 anos</span> e quero muito a sua presença na comemoração!</p>
                    <p>Para quem já foi nas anteriores, vou seguir com o mesmo plano, aluguei uma casa legal,
                      vou fazer as compras dos comes & bebes, e pagar parte do aluguel com o dinheiro arrecadado.
                    </p>
                    <p>
                      Estou torcendo para que saia um sol, pois vai rolar uma praia! k3
                    </p>
                  </div>
                  <h2 className='text-center text-2xl font-bold mt-10 mb-14'>Informações principais</h2>
                  <ul className='flex justify-around items-center gap-6 flex-wrap'>
                    <li>
                      <SimpleCard icon='icon-calendar-day-solid' label='20-22 de Out (sex-dom)' />
                    </li>
                    <li><SimpleCard icon='icon-umbrella-beach-solid' label='Praia de São Sebastião' /></li>
                    <li><SimpleCard icon='icon-burger-solid' label='Open Food and Drinks' /></li>
                    <li><SimpleCard icon='icon-users-solid' label='Máx. 12 Convidados' /></li>
                    <li><SimpleCard icon='icon-stopwatch-20-solid' label='+/- 3h de viagem' /></li>
                  </ul>
                  <div className='text-center mt-10 flex flex-col gap-4 justify-center items-center'>
                    <i className="text-purple text-5xl icon-hand-holding-dollar-solid"></i>
                    <p className='text-xl font-semibold'>
                      O valor total são de <strong className='text-purple'>R$500 </strong> por pessoa, pagos até a data
                      final de <strong className='text-purple'>06 de Out</strong>.
                    </p>
                    <p>
                      Podem parcelar em quantas vezes forem necessárias até completar o valor total.
                    </p>
                  </div>
                  <div className='flex justify-around items-center gap-4 my-10'>
                    <p className='font-semibold'>Exemplos de parcelas</p>
                    <ul className='font-extrabold text-purple'>
                      <li>2x R$ 250</li>
                      <li>3x R$ 167</li>
                      <li>4x R$ 125</li>
                      <li className='text-center'>...</li>
                    </ul>
                  </div>
                  <div className='text-center mb-10'>
                    <p>Essa será última que vou realizar devido minha futura trip, espero você lá! de coração s2</p>
                  </div>
                </div>

                <div className='w-full lg:w-1/2 lg:pl-6 flex flex-col gap-8 text-center max-2xl:mx-auto mb-6'>
                  <SectionDueDate />
                  <div className='w-full max-w-[400px] text-left mx-auto'>                    
                    <label htmlFor='guest' className='text-white text-2xl font-bold'>
                      Nome ou apelido:
                    </label>
                    <div className='relative w-full mt-4'>
                      <input
                        id="guest"
                        type="text"
                        name="guest"
                        className='w-full h-10 p-2 rounded-lg outline-dark-purple border-2 border-purple pb-3 text-black'
                        onChange={(e) => setGuest(e.target.value)}
                        onKeyUp={handleSubmitEnter}
                        value={guest}
                        placeholder='Informe seu nome ou apelido'
                      />
                      <button className='w-full text-white bg-dark-purple px-4 py-2 h-10 rounded-lg font-bold mt-6' onClick={handleSubmit}>CONFIRMAR PRESENÇA</button>
                      {error && <div className='absolute -bottom-16 text-purple '>
                        {message}
                      </div>}
                    </div>
                    
                    <div className='mt-20 text-center '>
                      Se a lista atingir 12 pessoas ou chegar a data final de 29/09 não será mais possível confirmar a sua presença #pokas
                    </div>
                    <p className='text-base mt-4 text-center'>Esse nome / apelido vai ser usuado para acessar as informações após confirmação!</p>
                  </div>
                </div>
              </section>
            </>
          )
        }
      </div>
    </GlobalLayout>
  );
}

export default BirthdayConfirm;

export async function getStaticProps() {
  const apiURL = process.env.BIRTHDAY_API;

  const requestOptions = {
    method: 'GET',
  };

  const response = await fetch(`${apiURL}/guests`, requestOptions);
  const guests = await response.json();

  return {
    props: {
      apiURL,
      guests,
    }
  }
}
