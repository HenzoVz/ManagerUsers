import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

import { useAuth } from '../../hooks/AuthContext';


const Header: React.FC = () => {

  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  };

  return (

    <Container>
      <h1>Manager Users</h1>
      <Content>
          <Link className="link" to="/dashboard">
            Cadastrar
          </Link>
          <Link className="link" to="/listagem">
            Listagem
          </Link>
          <Link className="link" to="/" onClick={handleSignOut}>
            Sair
          </Link>
      </Content>
    </Container>
  );
};

export default Header;

