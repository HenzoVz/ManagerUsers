import React, { useState, useEffect } from 'react';
import { FiLogIn } from 'react-icons/fi'

import { Page } from './styles';

const Login: React.FC = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Page>
      <h1>Log in
        <FiLogIn size={40}/>
      </h1>
      <form>
        <label>Email:</label>
        <br/>
        <input
          type="email"
          autoComplete="off"
          autoFocus
          value={name}
          placeholder="Digite o seu email"
          onChange={(event) => setName(event.target.value)}
        />
        <br/>
        <label>Senha:</label>
        <br/>
        <input
          type="password"
          autoComplete="off"
          autoFocus
          value={password}
          placeholder="Digite sua senha"
          onChange={event => setPassword(event.target.value)}
        />
      <br/>
      <button type="submit">Entrar</button>
      </form>
    </Page>
  )
}

export default Login;
