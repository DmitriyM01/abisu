import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from '../components/Nav.jsx';

function Header() {
  const links = [
    { link: "*", text: "Продукция" },
    { link: "*", text: "О компании" },
    { link: "*", text: "Контакты" },
    { link: "*", text: "Словарь" },
  ];

  return (
    <header className="header">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
        <img src="/images/abisu-logo.png" alt="ЭБИСУ" className="logo" />
      </NavLink>
      <text className='company-name'>ПРОИЗВОДСТВЕННАЯ КОМПАНИЯ "ЭБИСУ"</text>
      <nav className="nav">
        <ul>
            <NavLink to="/products" className='link-products'>
              Продукция
            </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;