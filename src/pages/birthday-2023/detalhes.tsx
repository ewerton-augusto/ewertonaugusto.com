import React from 'react';
import GlobalLayout from '../../layout/GlobalLayout';
import BirthHeader from '../../components/birth/header/Header';
import { GetServerSideProps } from 'next';
import SectionDueDate from '../../components/birth/sections/SectionDueDate';
import ItemList from '../../components/birth/ItemList/ItemList';
import CardActions from '../../components/birth/cards/CardActions';

const BirthdayDetails: React.FC = () => {
  return (
    <GlobalLayout>
      <div className='w-full min-h-screen px-6 bg-black pb-4'>
        <BirthHeader className='bg-black' />
        <section className='text-white text-xl pt-[120px]'>
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
              img=''
              label='Entrar no grupo do Whats'
            />

            <CardActions
              img=''
              label='Instagram para momentos'
            />

            <CardActions
              img=''
              label='Playlist Compartilhada'
            />

            <CardActions
              img=''
              label='Form dos comes e bebes'
            />

            <CardActions
              img=''
              label='Regras da casa'
            />

            <CardActions
              img=''
              label='Lista confirmada'
            />
          </ul>
        </section>
      </div>
    </GlobalLayout>
  )
}

export default BirthdayDetails

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

  return {
    props: {
      guests,
    }
  }
}
