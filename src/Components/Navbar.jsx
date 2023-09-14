import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { CgMenu, CgCloseR } from 'react-icons/cg';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Mainheader>
        {/* <NavLink to='/'>
          <img src='./images/logo.png' alt='logo' className='logo' />
        </NavLink> */}
        <Nav>
          <div className={openMenu ? 'menuIcon active' : 'menuIcon'}>
            <ul className='navbar-list'>
              <li>
                <NavLink
                  to='/'
                  className='navbar-link'
                  onClick={() => setOpenMenu(false)}
                >
                  {' '}
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to='/Aboutus'
                  className='navbar-link'
                  onClick={() => setOpenMenu(false)}
                >
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to='/Contactus'
                  className='navbar-link'
                  onClick={() => setOpenMenu(false)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className='mobile-navbar-btn'>
              <CgMenu
                name='menu-outline'
                className='mobile-nav-icon'
                onClick={() => setOpenMenu(true)}
              />
              <CgCloseR
                name='close-outline'
                className='close-outline mobile-nav-icon'
                onClick={() => setOpenMenu(false)}
              />
            </div>
          </div>
        </Nav>
      </Mainheader>
    </>
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

const Nav = styled.nav`
  .navbar-list {
    display: flex;
    gap: 4.8rem;
    li {
      list-style: none;
      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.white};
          transition: color 0.3s linear;
        }
        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
  }
  .mobile-navbar-btn {
    display: none;

    .close-outline {
      display: none;
    }
  }

  .mobile-navbar-btn[name='close-outline'] {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 999;
      border: ${({ theme }) => theme.colors.white};

      .mobile-nav-icon {
        font-size: 6.2rem;
        color: ${({ theme }) => theme.colors.white};
      }
    }

    .navbar-list {
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      background-color: black;
      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: column;
      text-align: center;

      transform: translateX(100%);

      li {
        .navbar-link {
          &:link,
          &:visited {
            font-size: 4.2rem;
          }
          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
      }
    }
    .active .mobile-nav-icon {
      display: none;
      font-size: 4.2rem;
      position: absolute;
      top: 3%;
      right: 10%;
      color: ${({ theme }) => theme.colors.white};
      z-index: 9999;
    }
    .active .close-outline {
      display: inline-block;
    }

    .active .navbar-list {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 999;
    }
  }
`;

export default Navbar;
