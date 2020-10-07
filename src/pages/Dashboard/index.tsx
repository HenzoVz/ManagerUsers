import React, { useState, useEffect, FormEvent } from 'react';
import { FaMapMarkedAlt, AiOutlineDatabase } from 'react-icons/all';

import { uuid } from 'uuidv4';

import Header from '../../components/Header';
import { Container } from './styles';

import { ToastContainer, toast, ToastContent } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../services/api';
import search from '../../services/searchCep'
import { cpfMask, cepMask } from '../../utils/mask';


interface User {
  id: string;
  name: string;
  cpf: string
  email: string;
  adress: {
    cep: string;
    street: string;
    number: string;
    district: string;
    city: string;
  }
}

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<User>({} as User);
  const [name, setName] =  useState('');
  const [cpf, setCpf] =  useState('');
  const [email, setEmail] =  useState('');
  const [cep, setCep] =  useState('');
  const [street, setStreet] =  useState('');
  const [number, setNumber] =  useState('');
  const [district, setDistrict] =  useState('');
  const [city, setCity] =  useState('');

  const notify = (text: ToastContent) => toast(text);

  function handleAddUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();


    if (!name) {
      notify("Nome é obrigatório")
    } else if (!email){
      notify("Email é obrigatório")
    } else if (!cpf){
      notify("CPF é obrigatório")
    } else if (!cep){
      notify("CEP é obrigatório")
    } else if (!street){
      notify("Rua é obrigatório")
    } else if (!number){
      notify("Número é obrigatório")
    } else if (!district){
      notify("Bairro é obrigatório")
    } else if (!city){
      notify("Cidade é obrigatório")
    } else {
        setUser({
          id: uuid(),
          name: name,
          cpf: cpfMask(cpf),
          email: email,
          adress: {
            cep: cepMask(cep),
            street: street,
            number: number,
            district: district,
            city: city

          }
        });
    }

  };

  useEffect(() => {
    async function getData(): Promise<void> {
      const response = await search.get(`${cep}/json`)
      const {logradouro, bairro, localidade} = response.data

      setStreet(logradouro);
      setDistrict(bairro);
      setCity(localidade);
    };
    getData()
  }, [cep])

  return (
    <>
      <Header/>
      <ToastContainer/>
      <Container>
          <form onSubmit={handleAddUser}>
          <section className="wrapper-section">
           <AiOutlineDatabase size={25} /> <span  className="title">Dados pessoais</span>
            <div className="wrapper-input">
              <label className="text">Nome</label>
              <input
                className="input"
                type="text"
                autoComplete="off"
                value = {name}
                autoFocus
                onChange={(event) => setName(event.target.value)}
              />
              <label className="text">Email</label>
              <input
                className="input"
                type="email"
                autoComplete="off"
                value = {email}
                autoFocus
                onChange={(event) => setEmail(event.target.value)}
              />
              <label className="text">CPF</label>
              <input
                  className="input"
                  type="text"
                  autoComplete="off"
                  value = {cpf}
                  autoFocus
                  maxLength="14"
                  onChange={(event) => setCpf(event.target.value)}
                />
            </div>
          </section>
          <section className="wrapper-section">
            <FaMapMarkedAlt size={25}/> <span className="title">Dados residenciais</span>
              <div className="wrapper-input">
                <label className="text">CEP</label>
                <input
                  className="input"
                  type="text"
                  autoComplete="off"
                  value = {cep}
                  autoFocus
                  maxLength="8"
                  onChange={(event) => setCep(event.target.value)}
                  />
                <label className="text">Rua</label>
                <input
                  className="input"
                  type="text"
                  autoComplete="off"
                  value = {street}
                  autoFocus
                  onChange={(event) => setStreet(event.target.value)}
                />
                <label className="text">Número</label>
                <input
                  className="input"
                  type="text"
                  autoComplete="off"
                  value = {number}
                  autoFocus
                  onChange={(event) => setNumber(event.target.value)}
                />
                <label className="text">Bairro</label>
                <input
                  className="input"
                  type="text"
                  autoComplete="off"
                  value ={district}
                  autoFocus
                  onChange={(event) => setDistrict(event.target.value)}
                />
                <label className="text">Cidade</label>
                <input
                  className="input"
                  type="text"
                  autoComplete="off"
                  value = {city}
                  autoFocus
                  onChange={(event) => setCity(event.target.value)}
                />
              </div>
            <button className="save" type="submit" >Salvar</button>
          </section>
          </form>
      </Container>
    </>
  )
};

export default Dashboard;
