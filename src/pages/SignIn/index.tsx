import React, { useState, useEffect, FormEvent } from 'react';
import { useAuth } from '../../hooks/AuthContext';
import { Link } from 'react-router-dom';

import { FiLogIn, FiUser,  } from 'react-icons/fi'
import { RiLockPasswordLine } from 'react-icons/ri';
import { ToastContainer, toast, ToastContent } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Page } from './styles';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const { signIn }  = useAuth();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email) {
      notify("Usuário não existe");
    } else if (!password) {
      notify("Usuário não existe");
    } else {
      signIn({
        email: email,
        password: password
      });
    }
  };

  useEffect(() => {

  }, [signIn])

  const notify = (text: ToastContent) => toast(text);


  return (
    <Page>
      <ToastContainer/>
      <h1>Fazer Login <FiLogIn size={40}/></h1>
      <form onSubmit={handleSubmit}>
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
      <button type="submit">Entrar</button>
      <br/>
      <Link to="/signup">
        <h3>Criar conta</h3>
      </Link>
        <hr/>
      </form>
    </Page>
  )
}

export default SignIn;
