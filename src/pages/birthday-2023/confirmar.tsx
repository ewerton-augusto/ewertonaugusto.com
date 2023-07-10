import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import GlobalLayout from '../../layout/GlobalLayout';
import BirthHeader from '../../components/birth/header/Header';
import SimpleCard from '../../components/birth/cards/SimpleCard';
import Timeout from '../../components/birth/timeout/Timeout';

const BirthdayConfirm: React.FC<{ guests: any[], guestAPI: string }> = ({ guests, guestAPI }) => {
  const router = useRouter();
  const [guest, setGuest] = useState("");
  const [error, setError] = useState(false);
  const [erroMsg, setErrorMsg] = useState("");

  const handleSubmit = async () => {
    const currentDate = new Date();
    const dueDate = new Date('September 30, 2023 00:00:00');

    // if (guests && guest.length === 14) {
    //   setErrorMsg("Lista cheia, sorry! Me chama no whats");
    //   setError(true);
    //   return;
    // }

    if (currentDate < dueDate) {
      // add guest
      // if (guest && guest.length > 2) {
      //   await fetch(guestAPI, {
      //     method: "POST",
      //     body: JSON.stringify({ name: guest.toLowerCase() })
      //   })
      //     .then((res) => res.json())
      //     .then((response) => {
      //       if (response) {
      //         setErrorMsg("Adicionado, bora pra praia!");
      //         setError(true);
      //         setTimeout(() => {
      //           router.push("/birthday-2023/detalhes");
      //         }, 2000);
      //       }
      //     })
      //     .catch((error) => {
      //       setErrorMsg("Falha ao entrar na lista de convidados");
      //       setError(true);
      //       console.log(error);
      //     })
      // }
    } else {
      setErrorMsg("Acabou o prazo my friendy, me chama no whats.");
      setError(true);
    }
  }

  const handleSubmitEnter = (event: any) => (event.keyCode === 13) && handleSubmit();

  return (
    <GlobalLayout>
      <div className='w-full min-h-screen px-6 bg-black'>
        <BirthHeader showLoginLink className='bg-black' />
        <section className='flex justify-between items-start flex-wrap text-white text-xl pt-[150px]'>
          <div className='w-full lg:w-1/2 max-2xl:mx-auto'>
            <div className='w-full flex flex-col gap-4 justify-start items-start'>
              <p>Hello my friend, espero que esteja bem!</p>
              <p>Esse ano completo os tão famosos <span className='text-purple'>30 anos</span> e quero muito a sua presença na minha comemoração!</p>
              <p>Para quem já foi nas comemorações anteriores, vou seguir com o mesmo plano, aluguei um lugar legal,
                e vou fazer as compras dos comes e bebes, e pagar parte do aluguel com a grana arrecadada.
              </p>
              <p>
                Vai rolar um som e espero que saia um sol também!
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
              <p className='text-xl text-white text-center font-bold'>
                O valor total são de <strong className='text-purple'>R$500 </strong> por pessoa, pagos até a data
                final de 06/10/2023. Podem parcelar em quantas vezes for necessário até completar
                o valor total dentro da data acima.
              </p>
            </div>
            <div className='flex justify-around items-center gap-4 my-10'>
              <p className='font-semibold'>Exemplos de parcelas</p>
              <ul className='font-extrabold text-purple'>
                <li>4x R$ 125</li>
                <li>3x R$ 167</li>
                <li>2x R$ 250</li>
                <li className='text-center'>...</li>
              </ul>
            </div>
            <div className='text-center mb-10'>
              <p>Essa será última que vou realizar devido minha trip, espero você lá! s2</p>
            </div>
          </div>

          <div className='w-full lg:w-1/2 lg:pl-6 flex flex-col gap-8 text-center max-2xl:mx-auto mb-6'>
            <img src="/birthday/rip-20s.gif" alt="RIP 20's" className='w-full mx-auto' />
            <p>Contagem regressiva para o even<span className='font-bold text-purple'>ton</span></p>
            <p className='font-semibold'>20 à 22 de Outubro de 2023</p>
            <Timeout />
            <h2 className='font-bold my-4'>Prazos máximos</h2>
            <div>
              <p>Confirmar sua presença ilustre: <span className='font-semibold'>29/09/2023</span></p>
              <p>Transferir divisão dos custos: <span className='font-semibold'>06/10/2023</span></p>
            </div>
            <div className='w-full max-w-3xl text-left mx-auto'>
              <label htmlFor='guest' className='text-white text-2xl font-bold'>
                Apelido ou Nome:
              </label>
              <div className='relative w-full mt-4'>
                <input
                  id="guest"
                  type="text"
                  name="guest"
                  className='w-full h-10 p-2 pr-[130px] rounded-lg outline-dark-purple border-2 border-purple pb-3 text-black'
                  onChange={(e) => setGuest(e.target.value)}
                  onKeyUp={handleSubmitEnter}
                  value={guest}
                  placeholder='Informe seu apelido ou nome'
                />
                <button className='absolute text-white bg-dark-purple right-0 px-4 py-2 h-10 rounded-r-lg font-bold' onClick={handleSubmit}>CONFIRMAR PRESENÇA</button>
                {error && <div className='absolute -bottom-10 text-white'>
                  {erroMsg}
                </div>}
              </div>
            </div>
          </div>
        </section>
      </div>
    </GlobalLayout>
  );
}

export default BirthdayConfirm;

// export async function getStaticProps() {
//   const baseURL = process.env.BIRTHDAY_API;
//   const guestAPI = `${baseURL}/guests/`;

//   const guests = await fetch(guestAPI, {
//     method: "GET",
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       return data;
//     })
//     .catch((error) => {
//       console.log(error)
//       return [];
//     })

//   return {
//     props: {
//       guests,
//       guestAPI,
//     }
//   }
// }

