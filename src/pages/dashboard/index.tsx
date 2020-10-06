import React from 'react';

import Header from '../../components/Header';

import { FaMapMarkedAlt, AiOutlineDatabase } from 'react-icons/all';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header/>
      <Container>
        <section className="wrapper-section">
           <AiOutlineDatabase size={25} /> <span  className="title">Dados pessoais</span>
          <form>
            <div className="wrapper-input">
              <label className="text">Nome</label>
              <input
                className="input"
                type="text"
                autoComplete="off"
                autoFocus
                onChange={(event) => console.log("digitou")}
              />
              <label className="text">Email</label>
              <input
                className="input"
                type="text"
                autoComplete="off"
                autoFocus
                onChange={(event) => console.log("digitou")}
              />
              <label className="text">CPF</label>
              <input
                  className="input"
                  type="text"
                  autoComplete="off"
                  autoFocus
                  onChange={(event) => console.log("digitou")}
                />
            </div>
          </form>
        </section>
        <section className="wrapper-section">
          <FaMapMarkedAlt size={25}/> <span className="title">Dados residenciais</span>
          <form>
            <div className="wrapper-input">
              <label className="text">CEP</label>
              <input
                className="input"
                type="text"
                autoComplete="off"
                autoFocus
                onChange={(event) => console.log("digitou")}
                />
              <label className="text">Rua</label>
              <input
                className="input"
                type="text"
                autoComplete="off"
                autoFocus
                onChange={(event) => console.log("digitou")}
              />
              <label className="text">Número</label>
              <input
                className="input"
                type="text"
                autoComplete="off"
                autoFocus
                onChange={(event) => console.log("digitou")}
              />
              <label className="text">Bairro</label>
              <input
                className="input"
                type="text"
                autoComplete="off"
                autoFocus
                onChange={(event) => console.log("digitou")}
              />
              <label className="text">Cidade</label>
              <input
                className="input"
                type="text"
                autoComplete="off"
                autoFocus
                onChange={(event) => console.log("digitou")}
              />
            </div>
          </form>
        </section>
            <button className="save" type="submit">Salvar</button>
      </Container>
    </>
  )
};

export default Dashboard;
