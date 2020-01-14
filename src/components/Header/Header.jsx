import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = props => {
  function navItem(path, title) {
    return (
      <li
        className='nav-item'
        data-toggle='collapse'
        data-target='#navbarToggler'
      >
        <NavLink className='nav-link' to={`/${path}`}>
          {title}
        </NavLink>
      </li>
    );
  }

  return (
    <section className='header'>
      <nav className='navbar navbar-light bg-light'>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarToggler'
          aria-controls='navbarToggler'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarToggler'>
          <div>
            <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
            {navItem('todo', 'Список дел')}
            {navItem('calendar', 'Календарь')}
            {navItem('focus', 'Фокусировка')}
            {navItem('notes', 'Заметки')}
            {navItem('projects', 'Проекты')}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
