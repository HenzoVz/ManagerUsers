import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
    <Container size={size}>
      <header>
        <h1>Sistema de Cadastro</h1>
        <nav>
          <>
            <Link className="link" to="/dashboard">
              Cadastrar
            </Link>
            <Link className="link" to="/listagem">
              Listagem
            </Link>
            <Link className="link" to="/">
              Sair
            </Link>
          </>
        </nav>
      </header>
    </Container>
);
export default Header;

