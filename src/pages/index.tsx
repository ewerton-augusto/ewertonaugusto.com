import React from 'react';
import GlobalLayout from '../layout/GlobalLayout';

const Home: React.FC = () => {
  return (
    <GlobalLayout>
      <section style={{
        width: "100vw",
        height: "100vh",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
        boxSizing: "border-box"
      }}>
        <img src="/assets/images/ewerton-augusto-logo.svg" alt="Ewerton Augusto" style={{
          margin: "16px auto",
          width: "100%",
          maxWidth: "180px"
        }} />
        <h1 style={{
          fontSize: "2.5rem"
        }}>Coming soon</h1>
        <p style={{
          margin: "10px 0 18px"
        }}>Website is under construction</p>
        <p>
          Contact: <a href="mailto:ewerton.santos2210@gmail.com">ewerton.santos2210@gmail.com</a>
        </p>
      </section>
    </GlobalLayout>
  )
}

export default Home;
