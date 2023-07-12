import React, { useState } from 'react';
import GlobalLayout from '../../layout/GlobalLayout';
import BirthHeader from '../../components/birth/header/Header';
import { GetServerSideProps } from 'next';
import SectionDueDate from '../../components/birth/sections/SectionDueDate';
import ItemList from '../../components/birth/ItemList/ItemList';
import CardActions from '../../components/birth/cards/CardActions';
import Modal from '../../components/birth/modal/Modal';

type BirthdayDetailsProps = {
  guests: any[];
  spotifyLink: string;
  wttLink: string;
  formLink: string;
  instaLink: string;
}

const BirthdayDetails: React.FC<BirthdayDetailsProps> = ({
  guests,
  spotifyLink,
  wttLink,
  formLink,
  instaLink,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalLink, setModalLink] = useState("");
  const [modalChildren, setModalChildren] = useState<React.ReactNode | string>();
  const [hideModalButton, setHideModalButton] = useState<boolean>();

  const handleOpenModal = (type: any) => {
    setShowModal(true);

    const actionData = {
      whats: {
        title: "Grupo do Whats",
        link: wttLink,
        children: <WhatsModal />,
      },
      insta: {
        title: "Insta Compartilhado",
        link: instaLink,
        children: <Insta />,
      },
      playlist: {
        title: "Spotify - Playlist Compartilhada",
        link: spotifyLink,
        children: <Spotify />,
      },
      form: {
        title: "Spotify - Playlist Compartilhada",
        link: spotifyLink,
        children: <Spotify />,
      },
      regras: {
        title: "Regras da Casa",
        link: '',
        children: <Regras />,
        hideButton: true,
      },
      lista: {
        title: "Pessoas confirmadas!",
        link: '',
        children: <GuestsList guests={guests} />,
        hideButton: true,
      },
    }

    setModalTitle(actionData[type].title);
    setModalLink(actionData[type].link);
    setModalChildren(actionData[type].children);
    setHideModalButton(actionData[type]?.hideButton ?? false);
  }

  return (
    <GlobalLayout>
      <Modal
        isOpen={showModal}
        title={modalTitle}
        link={modalLink}
        onClose={() => setShowModal(false)}
        hideButton={hideModalButton}
      >
        {modalChildren}
      </Modal>
      <div className='w-full min-h-screen px-6 bg-black pb-4'>
        <BirthHeader className='bg-black z-30' />
        <section className='text-white text-xl pt-[110px] max-sm:flex max-sm:flex-col-reverse'>
          <div className='flex gap-6 items-center justify-around flex-wrap max-lg:justify-center text-center'>
            <SectionDueDate />
          </div>
          <ul className='flex flex-wrap justify-start items-center my-10 text-white gap-3 lg:gap-8 '>
            <div className='flex flex-col gap-3'>
              <ItemList
                icon='icon-calendar-day-solid'
                label='20 à 22 de Outubro de 2023 - Check-in 15h, check-out 18h'
              />
              <ItemList
                icon='icon-umbrella-beach-solid'
                label='Rua Governador Adhemar Pereira de Barros nº 700 Bairro Cigarras, São Sebastião, São Paulo 11603-334'
              />
              <ItemList
                icon='icon-stopwatch-20-solid'
                label='Estimado 3h de viagem - Vamos divigir entre os carros para caronas'
              />
            </div>
            <div className='flex flex-col gap-3'>
              <ItemList
                icon='icon-burger-solid'
                label='Open food & drinks'
              />
              <ItemList
                icon='icon-users-solid'
                label='12 convidados'
              />
              <ItemList
                icon='icon-hand-holding-dollar-solid'
                label='R$ 500'
              />
            </div>
          </ul>
          <ul className='flex flex-wrap justify-around items-center mt-20 mb-10 gap-6'>
            <CardActions
              img='/birthday/whats.jpg'
              label='Entrar no grupo do Whats'
              onClick={() => handleOpenModal("whats")}
            />
            <CardActions
              img='/birthday/insta.jpg'
              label='Instagram para momentos'
              onClick={() => ""} // handleOpenModal("insta")}
            />
            <CardActions
              img='/birthday/playlist.jpg'
              label='Playlist Compartilhada'
              onClick={() => handleOpenModal("playlist")}
            />
            <CardActions
              img='/birthday/food.jpg'
              label='Form dos comes e bebes'
              onClick={() => ""} // handleOpenModal("form")}
            />
            <CardActions
              img='/birthday/rules.jpg'
              label='Regras da casa'
              onClick={() => handleOpenModal("regras")}
            />
            <CardActions
              img='/birthday/guests.jpg'
              label='Lista confirmada'
              onClick={() => handleOpenModal("lista")}
            />
          </ul>
        </section>
      </div>
    </GlobalLayout>
  )
}

export default BirthdayDetails;

const WhatsModal: React.FC = () => (
  <div className='flex flex-col gap-4 py-4'>
    <img src="/birthday/whats.gif" alt="dancing" className='w-full object-cover' />
    <p>Hey, esse é o link do grupo do Whats, como já confirmou presença só acessar o grupo.</p>
    <p>O grupo vai ficar fechado até 2 semanas antes do role, após vai ser aberto para envio de mensagens, memes, fofocas!</p>
    <p>Caso queira, pode entrar mais próximo da viagem! s2 Let's que bora.</p>
    <p className='font-bold'>Por favor, quando entrar no grupo manda seu e-mail!</p>
  </div>
)

const Insta: React.FC = () => (
  <div className='flex flex-col gap-4 py-4'>
    <p>Bora bailar?!</p>
    <img src="/birthday/playlist.gif" alt="dancing" className='w-full object-cover' />
    <p>Aqui vai a playlist que tocará no role.</p>
    <p>Não deixei de colocar aquele som que tu gosta!</p>
  </div>
)

const Spotify: React.FC = () => (
  <div className='flex flex-col gap-4 py-4'>
    <p>Bora bailar?!</p>
    <img src="/birthday/playlist.gif" alt="dancing" className='w-full object-cover' />
    <p>Aqui vai a playlist que tocará no role.</p>
    <p>Não deixei de colocar aquele som que tu gosta!</p>
  </div>
)

const Regras: React.FC = () => (
  <div className='flex flex-col gap-4 py-4'>
    <img src="/birthday/rules.gif" alt="dancing" className='w-full object-cover' />
    <p className='font-extrabold'>Fique atento as regras da casa! Quem descumprir, vai assumir a multa :D</p>
    <div className='overflow-y-auto'>
      <p>Orientações sobre o uso do imóvel:*</p>

      <p>✓ Não entrar molhado e Remova o excesso de areia ao entrar no imóvel;</p>

      <p>✓ Favor não sentar se, Roupas molhadas ou úmidas nos assentos, cadeiras, poltronas, sofá e camas (Tecidos).</p>

      <p>✓ Deve se respeitar os vizinhos e os horários em relação a *festa e música* alta, dentro do limite (Decibéis) das 9h  até 20h | Após será permitido apenas som ambiente.</p>

      <p>Caso quebre algum objetos, copos, taças, ou danifique algo na casa, avise-nos imediatamente para que possamos aplicar a cobrança devida para substituição.</p>

      <p>*É proibido fumar dentro da casa, nos decks, Área Gourmet e área coberta.*</p>

      <p>Proibido jogar lixos nos decks da piscina, cozinha e quartos;</p>

      <p>Proibido descartar papel higiênico nos vasos sanitários.</p>

      <p>*Uso da Piscina*</p>

      <p>✓ Proibido entrar na piscina com uso de Protetores solar, *Bronzeadores* e Areia de Praia.</p>

      <p>*Favor passar na ducha.*</p>

      <p>*Uso da SPA*</p>

      <p>Após as 22h Favor não acionar a Bomba da Hidromassagem.</p>

      <p>* Após as 22:00 é PROIBIDO som alto e conversas em tom muito alto, pois estamos em um lugar familiar e que preza pelos bons costumes, além das rigorosas leis municipais em relação a perturbação do sossego.</p>
    </div>
  </div>
)

const GuestsList: React.FC<{ guests: any[] }> = ({ guests }) => (
  <div className='flex flex-col gap-4 py-4'>
    <img src="/birthday/lista.gif" alt="dancing" className='w-full object-cover' />
    <p className='font-extrabold'>Segue os nomes já confirmados!!!</p>
    <ul className='flex justify-around flex-wrap items-start gap-4 font-bold text-purple'>
      {guests?.map((guest) => (
        <li> - {guest.name} - </li>
      ))}
    </ul>
  </div>
)

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apiURL = process.env.BIRTHDAY_API;

  const requestOptions = {
    method: 'GET',
  };

  const guestId = context.query.id;

  if (!guestId) {
    return {
      redirect: {
        destination: "/birthday-2023",
        permanent: false
      }
    }
  }

  const response = await fetch(`${apiURL}/guests`, requestOptions);
  const guests = await response.json();

  const spotifyLink = process.env.SPOTIFY_PLAYLIST;
  const wttLink = process.env.WHATSAPP_GROUP;
  const formLink = process.env.FORM_FOOD;
  const instaLink = process.env.INSTAGRAM_ACCOUNT;

  return {
    props: {
      guests,
      spotifyLink,
      wttLink,
      formLink,
      instaLink,
    }
  }
}
