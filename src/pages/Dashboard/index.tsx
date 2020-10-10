import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { FaMapMarkedAlt, AiOutlineDatabase } from 'react-icons/all';
import {useParams} from 'react-router-dom';
import { uuid } from 'uuidv4';

import Header from '../../components/Header';
import { Container } from './styles';

import { ToastContainer, toast, ToastContent } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../services/api';
import search from '../../services/searchCep'
import { cpfMask, cepMask } from '../../utils/mask';

interface Params {
  id: string;
}

const Dashboard: React.FC = () => {

  const [name, setName] =  useState<string>('');
  const [cpf, setCpf] =  useState<string>('');
  const [email, setEmail] =  useState<string>('');
  const [cep, setCep] =  useState<string>('');
  const [street, setStreet] =  useState<string>('');
  const [number, setNumber] =  useState<string>('');
  const [district, setDistrict] =  useState<string>('');
  const [city, setCity] =  useState<string>('');


  const notify = (text: ToastContent) => toast(text);

  const params = useParams<Params>();

  const inputRef = useRef<HTMLInputElement>(null);


  const cpfValidation = require('validar-cpf');
  const validation = cpfValidation(cpf)

  function isNumber(value: string) {
    return /^[0-9\b]+$/.test(value);
  }

  function cepToNumberRef() {
    if (cep.length === 8) {
      return inputRef.current?.focus()
    }
    return;
  }

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
    } else if (isNumber(number) !== true) {
      notify("Número inválido")
    } else if (!number){
      notify("Número é obrigatório")
    } else if (!district){
      notify("Bairro é obrigatório")
    } else if (!city){
      notify("Cidade é obrigatório")
    } else {

      const dataUser = {
        id: uuid(),
        name: name,
        cpf: cpfMask(cpf),
        email: email,
        adress: {
          cep: cep,
          street: street,
          number: number,
          district: district,
          city: city
        }
      };

      if (params.id) {
        api.put(`cadastros/${params.id}`, dataUser)
        .then(() => {
          notify("Edição realizada");
        })
        .catch(() => {
          notify("Houve um erro ao inserir")
        })
      } else {

        api.post('cadastros', dataUser)
        .then(() => {
          notify('Cadastro realizado')
          setName('');
          setEmail('');
          setCpf('');
          setCep('');
          setStreet('');
          setNumber('');
          setDistrict('');
          setCity('');
        })
        .catch(() => {
          notify('Houve um erro ao inserir')
        });
      }
    }
  };

  useEffect(() => {
      if(cep.length === 8) {
        try {
          search.get(`${cep}/json`).then(response => {
          const {cep, logradouro, bairro, localidade} = response.data
          setCep(cepMask(cep));
          setStreet(logradouro);
          setDistrict(bairro);
          setCity(localidade);
          });
        } catch(err) {
          notify("Erro ao busca CEP");
        }
        cepToNumberRef();
      };
  }, [cep])

  useEffect(() => {
    function verifyCPF() {
      if (cpf.length === 11) {
        if(validation === true) {
            notify("CPF válido");
          } else {
            notify("CPF inválido");
          }
        }
      }
      verifyCPF();
  }, [cpf, validation]);

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
                onChange={(event) => setEmail(event.target.value)}
              />
              <label className="text">CPF</label>
              <input
                  className="input"
                  type="text"
                  autoComplete="off"
                  value = {cpf}
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
                  maxLength="8"
                  onChange={(event) => setCep(event.target.value)}
                  onChangeCapture={() => cepToNumberRef}
                  />
                <label className="text">Rua</label>
                <input
                  className="input"
                  type="text"
                  autoComplete="off"
                  value = {street}
                  onChange={(event) => setStreet(event.target.value)}
                />
                <label className="text">Número</label>
                <input
                  className="input"
                  type="text"
                  autoComplete="off"
                  value = {number}
                  maxLength="4"
                  onChange={(event) => setNumber(event.target.value)}
                  ref={inputRef}

                />
                <label className="text">Bairro</label>
                <input
                  className="input"
                  type="text"
                  autoComplete="off"
                  value ={district}
                  onChange={(event) => setDistrict(event.target.value)}
                />
                <label className="text">Cidade</label>
                <input
                  className="input"
                  type="text"
                  autoComplete="off"
                  value = {city}
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
