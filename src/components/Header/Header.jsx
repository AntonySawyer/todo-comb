import React from 'react';
import './Header.css';

const Header = (props) => {
  const btnTitle = `${props.navActive ? 'Close' : 'Show'} nav`;
  return (
    <section className="header">
      <button onClick={props.setNav}>{ btnTitle }</button>
      <span>TO-DO COMBAINE</span>
      <span>{props.curScreen}</span>
    </section>
  );
}

export default Header;
