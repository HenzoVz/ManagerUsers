import React, { useState, useEffect } from 'react';
import { FiLogIn, FiUser,  } from 'react-icons/fi'
import { RiLockPasswordLine } from 'react-icons/ri';

import { Page } from './styles';

const Login: React.FC = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Page>
      <h1>Login <FiLogIn size={40}/></h1>
      <form>
        <div className="form-div">
          <FiUser size={30}/>
          <input
            type="email"
            autoComplete="off"
            autoFocus
            value={name}
            placeholder="Digite o seu email"
            onChange={(event) => setName(event.target.value)}
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
            placeholder="Digite sua senha"
            onChange={event => setPassword(event.target.value)}
          />
          </div>
        <br/>
      <button type="submit">Entrar</button>
      </form>
    </Page>
  )
}

export default Login;
