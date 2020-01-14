import React from 'react';
import './Button.css';
const Button = ({ title, handle, classes, disabled, id }) => {
  return (
    <button className={classes} onClick={handle} disabled={disabled} id={id}>{ title }</button>
  )
}

export default Button;