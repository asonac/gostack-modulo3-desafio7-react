import React from 'react';

import { NavLink } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <NavLink
          activeStyle={{
            paddingBottom: '7px',
            borderBottom: '3px solid #FF872C',
          }}
          to="/"
          exact
        >
          Listagem
        </NavLink>
        <NavLink
          activeStyle={{
            paddingBottom: '7px',
            borderBottom: '3px solid #FF872C',
          }}
          to="/import"
        >
          Importar
        </NavLink>
      </nav>
    </header>
  </Container>
);

export default Header;
