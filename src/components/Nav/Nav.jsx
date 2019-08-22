import React from 'react';
import './Nav.css';

const Nav = (props) => {
  return (
    <section className="navigation">
      <ul>
        <li onClick={() => props.setScreen('list')}>Список дел</li>
        <li onClick={() => props.setScreen('calendar')}>Календарь</li>
        <li onClick={() => props.setScreen('focus')}>Фокусировка</li>
        <li onClick={() => props.setScreen('notes')}>Заметки</li>
        <li onClick={() => props.setScreen('projects')}>Проекты</li>
      </ul>
    </section>
  );
}

export default Nav;
