import React, { useState } from "react";
import GlobalLayout from "../../layout/GlobalLayout";
import BirthHeader from "../../components/birth/header/Header";
import { GetServerSideProps } from "next";
import SectionDueDate from "../../components/birth/sections/SectionDueDate";
import ItemList from "../../components/birth/ItemList/ItemList";
import CardActions from "../../components/birth/cards/CardActions";
import Modal from "../../components/birth/modal/Modal";

type BirthdayDetailsProps = {
  guests: any[];
  spotifyLink: string;
  wttLink: string;
  formLink: string;
  instaLink: string;
};

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
  const [modalChildren, setModalChildren] = useState<
    React.ReactNode | string
  >();
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
        title: "Forms Comes & Bebes",
        link: formLink,
        children: <FoodForms />,
      },
      regras: {
        title: "Regras da Casa",
        link: "",
        children: <Regras />,
        hideButton: true,
      },
      lista: {
        title: "Pessoas confirmadas!",
        link: "",
        children: <GuestsList guests={guests} />,
        hideButton: true,
      },
      pix: {
        title: "Informações de pagamento",
        link: "",
        children: <Pix />,
        hideButton: true,
      },
    };

    setModalTitle(actionData[type].title);
    setModalLink(actionData[type].link);
    setModalChildren(actionData[type].children);
    setHideModalButton(actionData[type]?.hideButton ?? false);
  };

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
      <div className="w-full min-h-screen px-6 bg-black pb-4">
        <BirthHeader className="bg-black z-30" />
        <section className="text-white text-xl pt-[60px] sm:pt-[120px] max-sm:flex max-sm:flex-col-reverse">
          <div className="flex gap-6 items-center justify-around flex-wrap max-lg:justify-center text-center">
            <SectionDueDate />
          </div>
          <ul className="flex flex-wrap justify-start items-center my-10 text-white gap-3 lg:gap-8 ">
            <div className="flex flex-col gap-3">
              <ItemList
                icon="icon-calendar-day-solid"
                label="20 à 22 de Outubro de 2023 - Check-in 15h, check-out 18h"
              />
              <ItemList
                icon="icon-umbrella-beach-solid"
                label="Rua Governador Adhemar Pereira de Barros nº 700 Bairro Cigarras, São Sebastião, São Paulo 11603-334"
              />
              <ItemList
                icon="icon-stopwatch-20-solid"
                label="Estimado +/-3h de viagem - Vamos divigir as pessoas entre os carros para caronas"
              />
            </div>
            <div className="flex flex-col gap-3">
              <ItemList icon="icon-burger-solid" label="Open food & drinks" />
              <ItemList
                icon="icon-users-solid"
                label="12 convidados - Mandar seu e-mail no Whats (privado)"
              />
              <ItemList
                icon="icon-hand-holding-dollar-solid"
                label="R$ 500 (Podendo parcelar) - Pix 11990161687"
              />
            </div>
          </ul>
          <ul className="flex flex-wrap justify-around items-center mt-20 mb-10 gap-6">
            <CardActions
              img="/birthday/whats.jpg"
              label="Entrar no grupo do Whats"
              onClick={() => handleOpenModal("whats")}
            />
            <CardActions
              img="/birthday/insta.jpg"
              label="Instagram para momentos"
              onClick={() => handleOpenModal("insta")}
            />
            <CardActions
              img="/birthday/playlist.jpg"
              label="Playlist Compartilhada"
              onClick={() => handleOpenModal("playlist")}
            />
            <CardActions
              img="/birthday/food.jpg"
              label="Form dos comes e bebes"
              onClick={() => handleOpenModal("form")}
            />
            <CardActions
              img="/birthday/rules.jpg"
              label="Regras da casa"
              onClick={() => handleOpenModal("regras")}
            />
            <CardActions
              img="/birthday/guests.jpg"
              label="Lista confirmada"
              onClick={() => handleOpenModal("lista")}
            />
            <CardActions
              img="/birthday/money.jpg"
              label="Informações para PIX"
              onClick={() => handleOpenModal("pix")}
            />
          </ul>
        </section>
      </div>
    </GlobalLayout>
  );
};

export default BirthdayDetails;

const WhatsModal: React.FC = () => (
  <div className="flex flex-col gap-4 py-4">
    <img
      src="/birthday/whats.gif"
      alt="dancing"
      className="w-full h-52 object-cover"
    />
    <div className="h-full max-h-[170px] overflow-y-auto flex flex-col gap-4">
      <p>
        Hey, esse é o link do grupo do Whats, como já confirmou presença só
        acessar o grupo.
      </p>
      <p>
        O grupo vai ficar fechado até 2 semanas antes do role, após vai ser
        aberto para envio de mensagens, memes, fofocas!
      </p>
      <p>Caso queira, pode entrar mais próximo da viagem! s2 Let's que bora.</p>
      <p className="font-bold">
        Por favor, também mande seu e-mail no Whats (privado)!
      </p>
    </div>
  </div>
);

const Insta: React.FC = () => (
  <div className="flex flex-col gap-4 py-4">
    <p>Insta Compartilhado???</p>
    <img
      src="/birthday/insta.gif"
      alt="insta"
      className="w-full object-cover h-52"
    />
    <div className="h-full max-h-[170px] overflow-y-auto">
      <p className="mb-4 font-bold">
        A ideia é de todos participarem em uma experiência diferente para
        registrarmos a comemoração...
      </p>
      <span className="text-purple font-semibold"></span>
      <ol className="flex flex-col gap-4">
        <li>- Seguir @the30ton</li>
        <li>
          - Logar no insta do{" "}
          <span className="text-purple font-semibold">@the30ton</span> (A senha
          vai estar no grupo do whats) e após aceitar a sua conta (pra poder ver
          as fotos depois)
        </li>
        <li>- Crie um story highlight com seu nick</li>
        <li>
          - Postar o 1º highlight como self-video falando das expectativas do
          role, e não mostrar pra ninguém. Pode assistir o dos outros!
        </li>
        <li>
          - No dia da comemoração cada pessoa vai postar fotos no feed (geral) e
          videos no seu próprio highlight conforme sua perspectiva
        </li>
      </ol>
      <p className="mt-6 font-semibold">
        Registros do role sobre os olhos de cada um! Ah, e não torne esse perfil
        público, é algo nosso.
      </p>
    </div>
  </div>
);

const Spotify: React.FC = () => (
  <div className="flex flex-col gap-4 py-4">
    <p>Bora bailar?!</p>
    <img
      src="/birthday/playlist.gif"
      alt="playlist"
      className="w-full object-cover h-52"
    />
    <p>Aqui vai a playlist que tocará no role.</p>
    <p>Não deixei de colocar aquele som que tu gosta!</p>
  </div>
);

const FoodForms: React.FC = () => (
  <div className="flex flex-col gap-4 py-4">
    <p>Hello again...</p>
    <img
      src="/birthday/food.gif"
      alt="food"
      className="w-full object-cover h-52"
    />
    <p>
      Bom a ideia desse form é votar em suas preferências de comidas e bebidas.
      Também informar caso tenha alguma alergia! Quero ninguém passando mal :)
    </p>
    <p>Informe caso não coma carne, ao algo que afete sua saúde, ...</p>
  </div>
);

const Regras: React.FC = () => (
  <div className="flex flex-col gap-4 py-4">
    <img
      src="/birthday/rules.gif"
      alt="rules"
      className="w-full object-cover h-52"
    />
    <p className="font-extrabold">
      Fique atento as regras da casa! Quem descumprir, vai assumir a multa :D
    </p>
    <div className="h-full max-h-[210px] overflow-y-auto">
      <p>Orientações sobre o uso do imóvel:*</p>
      <p>
        ✓ Não entrar molhado e Remova o excesso de areia ao entrar no imóvel;
      </p>
      <p>
        ✓ Favor não sentar se, Roupas molhadas ou úmidas nos assentos, cadeiras,
        poltronas, sofá e camas (Tecidos).
      </p>
      <p>
        ✓ Deve se respeitar os vizinhos e os horários em relação a *festa e
        música* alta, dentro do limite (Decibéis) das 9h até 20h | Após será
        permitido apenas som ambiente.
      </p>
      <p>
        Caso quebre algum objetos, copos, taças, ou danifique algo na casa,
        avise-nos imediatamente para que possamos aplicar a cobrança devida para
        substituição.
      </p>
      <p>
        *É proibido fumar dentro da casa, nos decks, Área Gourmet e área
        coberta.*
      </p>
      <p>Proibido jogar lixos nos decks da piscina, cozinha e quartos;</p>
      <p>Proibido descartar papel higiênico nos vasos sanitários.</p>
      <p>*Uso da Piscina*</p>
      <p>
        ✓ Proibido entrar na piscina com uso de Protetores solar, *Bronzeadores*
        e Areia de Praia.
      </p>
      <p>*Favor passar na ducha.*</p>
      <p>*Uso da SPA*</p>
      <p>Após as 22h Favor não acionar a Bomba da Hidromassagem.</p>
      <p>
        * Após as 22:00 é PROIBIDO som alto e conversas em tom muito alto, pois
        estamos em um lugar familiar e que preza pelos bons costumes, além das
        rigorosas leis municipais em relação a perturbação do sossego.
      </p>
    </div>
  </div>
);

const GuestsList: React.FC<{ guests: any[] }> = ({ guests }) => (
  <div className="flex flex-col gap-4 py-4">
    <img
      src="/birthday/lista.gif"
      alt="dancing"
      className="w-full object-cover"
    />
    <p className="font-extrabold text-center">Confirmados!!!</p>
    <ul className="flex justify-around flex-wrap items-start gap-2 font-bold text-dark-purple">
      {guests?.map((guest) => (
        <li className="capitalize"> {guest.name} </li>
      ))}
    </ul>
  </div>
);

const Pix: React.FC = () => (
  <div className="flex flex-col gap-4 py-4">
    <img
      src="/birthday/money.gif"
      alt="payment"
      className="w-full object-cover"
    />
    <p className="font-extrabold">Segue os dados para pagamentos!</p>
    <ul>
      <li>
        <span className="font-bold text-dark-purple mr-2">Valor total:</span>
        R$ 500
      </li>
      <li>
        <span className="font-bold text-dark-purple mr-2">Pagar até:</span>
        06/10/2023
      </li>
      <li>
        <span className="font-bold text-dark-purple mr-2">Pix:</span>
        11990161687
      </li>
    </ul>
  </div>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apiURL = process.env.BIRTHDAY_API;

  const requestOptions = {
    method: "GET",
  };

  const guestId = context.query.id;

  if (!guestId) {
    return {
      redirect: {
        destination: "/birthday-2023",
        permanent: false,
      },
    };
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
    },
  };
};
