// import React, { useState, useEffect, useCallback, useRef, FormEvent } from 'react';
// import { FaMapMarkedAlt, AiOutlineDatabase } from 'react-icons/all';
// import { ToastContainer, toast, ToastContent } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import {useParams} from 'react-router-dom';
// import { uuid } from 'uuidv4';

// import { api, viaCep } from '../../services/apis';
// import { cpfMask, cepMask } from '../../utils/mask';

// import Header from '../../components/Header';
// import Input from '../../components/Input';

// import { Container } from './styles';

// interface Params {
//   id: string;
// }

// const Dashboard: React.FC = () => {

//   const [name, setName] =  useState('');
//   const [cpf, setCpf] =  useState('');
//   const [email, setEmail] =  useState('');
//   const [cep, setCep] =  useState('');
//   const [street, setStreet] =  useState('');
//   const [number, setNumber] =  useState('');
//   const [district, setDistrict] =  useState('');
//   const [city, setCity] =  useState('');


//   const notify = (text: ToastContent) => toast(text);

//   const params = useParams<Params>();

//   const inputRef = useRef<HTMLInputElement>(null);


//   const cpfValidation = require('validar-cpf');
//   const validation = cpfValidation(cpf)

//   const isNumber = useCallback((value: string) => {
//    return /^[0-9\b]+$/.test(value)
//   }, []);

//   const cepToNumberRef = useCallback(() => {
//     if (cep.length === 8) {
//       return inputRef.current?.focus()
//     }
//     return;
//   }, [cep]);

//   const handleAddUser = useCallback((event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     if (!name) {
//       notify("Nome é obrigatório")
//     } else if (!email){
//       notify("Email é obrigatório")
//     } else if (!cpf){
//       notify("CPF é obrigatório")
//     } else if (!cep){
//       notify("CEP é obrigatório")
//     } else if (!street){
//       notify("Rua é obrigatório")
//     } else if (isNumber(number) !== true) {
//       notify("Número inválido")
//     } else if (!number){
//       notify("Número é obrigatório")
//     } else if (!district){
//       notify("Bairro é obrigatório")
//     } else if (!city){
//       notify("Cidade é obrigatório")
//     } else {

//       const dataUser = {
//         id: uuid(),
//         name: name,
//         cpf: cpfMask(cpf),
//         email: email,
//         adress: {
//           cep: cep,
//           street: street,
//           number: number,
//           district: district,
//           city: city
//         }
//       };

//       if (params.id) {
//         api.put(`cadastros/${params.id}`, dataUser)
//         .then(() => {
//           notify("Edição realizada");
//         })
//         .catch(() => {
//           notify("Houve um erro ao inserir")
//         })
//       } else {

//         api.post('cadastros', dataUser)
//         .then(() => {
//           notify('Cadastro realizado')
//           setName('');
//           setEmail('');
//           setCpf('');
//           setCep('');
//           setStreet('');
//           setNumber('');
//           setDistrict('');
//           setCity('');
//         })
//         .catch(() => {
//           notify('Houve um erro ao inserir')
//         });
//       }
//     }
//   }, [name, email, cpf, cep, street, number, district, city, isNumber, params]);

//   useEffect(() => {
//       if(cep.length === 8) {
//         try {
//           viaCep.get(`${cep}/json`).then(response => {
//           const {cep, logradouro, bairro, localidade} = response.data
//           setCep(cepMask(cep));
//           setStreet(logradouro);
//           setDistrict(bairro);
//           setCity(localidade);
//           });
//         } catch(err) {
//           notify("Erro ao busca CEP");
//         }
//       };
//       cepToNumberRef();
//   }, [cep, cepToNumberRef])

//   useEffect(() => {
//     function verifyCPF() {
//       if (cpf.length === 11) {
//         if(validation === true) {
//             notify("CPF válido");
//           } else {
//             notify("CPF inválido");
//           }
//         }
//       }
//       verifyCPF();
//   }, [cpf, validation]);

//   return (
//     <>
//       <Header/>
//       <ToastContainer/>
//       <Container>
//           <form onSubmit={handleAddUser}>
//           <section className="wrapper-section">
//            <AiOutlineDatabase size={25} /> <span  className="title">Dados pessoais</span>
//             <div className="wrapper-input">
//               <label className="text">Nome</label>
//               <Input
//                 type="text"
//                 autoComplete="off"
//                 value = {name}
//                 autoFocus
//                 onChange={(event) => setName(event.target.value)}
//               />
//               <label className="text">Email</label>
//               <Input
//                 type="email"
//                 autoComplete="off"
//                 value = {email}
//                 onChange={(event) => setEmail(event.target.value)}
//               />
//               <label className="text">CPF</label>
//               <Input
//                   type="text"
//                   autoComplete="off"
//                   value = {cpf}
//                   maxLength="14"
//                   onChange={(event) => setCpf(event.target.value)}
//                 />
//             </div>
//           </section>
//           <section className="wrapper-section">
//             <FaMapMarkedAlt size={25}/> <span className="title">Dados residenciais</span>
//               <div className="wrapper-input">
//                 <label className="text">CEP</label>
//                 <Input
//                   type="text"
//                   autoComplete="off"
//                   value = {cep}
//                   maxLength="8"
//                   onChange={(event) => setCep(event.target.value)}
//                   onChangeCapture={() => cepToNumberRef}
//                   />
//                 <label className="text">Rua</label>
//                 <Input
//                   type="text"
//                   autoComplete="off"
//                   value = {street}
//                   onChange={(event) => setStreet(event.target.value)}
//                 />
//                 <label className="text">Número</label>
//                 <Input
//                   type="text"
//                   autoComplete="off"
//                   value = {number}
//                   maxLength="4"
//                   onChange={(event) => setNumber(event.target.value)}

//                 />
//                 <label className="text">Bairro</label>
//                 <Input
//                   type="text"
//                   autoComplete="off"
//                   value ={district}
//                   onChange={(event) => setDistrict(event.target.value)}
//                 />
//                 <label className="text">Cidade</label>
//                 <Input
//                   type="text"
//                   autoComplete="off"
//                   value = {city}
//                   onChange={(event) => setCity(event.target.value)}
//                 />
//               </div>
//             <button className="save" type="submit" >Salvar</button>
//           </section>
//           </form>
//       </Container>
//     </>
//   )
// };

// export default Dashboard;


import React from 'react'

const Dashboard: React.FC = () => {
return (
  <h1>Dashboard</h1>
  )
}

export default Dashboard;
