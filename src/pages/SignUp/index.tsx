import React, { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { BiUser, FiUser, RiLockPasswordLine } from 'react-icons/all'
import { ToastContainer, toast, ToastContent } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { uuid } from 'uuidv4';
import { api } from '../../services/apis';

import { Page } from './styles';



const SingUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const notify = (text: ToastContent) => toast(text);

  const history = useHistory();

  function handleCreateUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email) {
      notify("Email é obrigatório");
    } else if (!password) {
      notify("Senha é obrigatório");
    } else if (password.length < 4) {
      notify("Senha curta");
    } else {

      const dataRegister = {
        id: uuid(),
        email: email,
        password: password
      }

      api.post('signup', dataRegister)
      .then(() => {
        notify("Cadastro Realizado")
      })
      .catch(() => {
        notify("Erro ao cadastrar");
      })
      .finally(() => {
        history.push('/');
      });
    }
  };

  return (
    <Page>
      <ToastContainer/>
      <h1>Fazer Cadastro <BiUser size={40}/></h1>
      <form onSubmit={handleCreateUser}>
        <div className="form-div">
          <FiUser size={30}/>
          <input
            type="email"
            autoComplete="off"
            autoFocus
            value={email}
            placeholder="Digite o seu email"
            maxLength="50"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <br/>
        <div className="form-div">
          <RiLockPasswordLine size={30} />
          <input
            type="password"
            autoComplete="off"
            autoFocus
            value={password}
            maxLength="20"
            placeholder="Digite sua senha"
            onChange={event => setPassword(event.target.value)}
          />
          </div>
        <br/>
          <button type="submit">Cadastrar</button>
          <br/>
        <Link to="/">
          <h3>Voltar login</h3>
        </Link>
        <hr/>
      </form>
    </Page>
  )
}

export default SingUp;
