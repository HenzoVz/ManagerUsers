import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import { useAuth } from '../../hooks/AuthContext';


const Header: React.FC = () => {

  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  };

  return (

    <Container>
      <header>
        <h1>Manager Users</h1>
        <nav>
          <>
            <Link className="link" to="/dashboard">
              Cadastrar
            </Link>
            <Link className="link" to="/listagem">
              Listagem
            </Link>
            <Link className="link" to="/" onClick={handleSignOut}>
              Sair
            </Link>
          </>
        </nav>
      </header>
    </Container>
  );
};

export default Header;

