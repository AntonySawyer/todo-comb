import React from 'react';
import './Tag.css';
import Button from '../../../../common/Button/Button';

export default ({ title, deleteData, filter }) => {
  return (
    <div className="tag-wrapper">
      <span onClick={ filter }>{ title }</span>
      <Button title="del" handle={deleteData} classes="btn small-btn red-bg" />
    </div>
  )
}