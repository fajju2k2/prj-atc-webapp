import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';

const Header = () => {
  return (
    <Mainheader>
      <NavLink to='/'>
        <img src='./images/logo.png' alt='logo' className='logo' />
      </NavLink>
      <Navbar />
    </Mainheader>
  );
};

const Mainheader = styled.header`
  padding: 0 4.8rem;
  height: 13rem;
  background-color: rgb(153, 204, 255);
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;

  .logo {
    height: auto;
    max-width: 300px;
    width: 100%;
    margin-left: 20rem;
  }
  @media (max-width: 768px) {
    display: flex;
    max-width: 100%;
    height: auto;
  }
  @media only screen and (max-width: 1494px) {
    .logo {
      width: 100%;
    }

    .logo,
    .logo {
      display: block;
      margin: 0 auto;
    }
    .logo {
      max-width: 200px;
    }
  }
`;

export default Header;
