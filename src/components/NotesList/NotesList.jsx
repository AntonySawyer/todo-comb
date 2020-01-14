import React from 'react';

import TagCloud from '../TagCloud';
import './NotesList.css';
import Button from '../common/Button';



export default ({ activeNoteId, notes, tags, onChange, deleteData, newNote, filter, filterEnabled }) => {
  const NotesTitles = [];
  Object.keys(notes).forEach(id => {
    NotesTitles.push(<li key={id} className={activeNoteId === id ? 'active' : undefined}>
      <label htmlFor={`note_${id}`}>{notes[id].title}</label>
      <input type="radio" id={`note_${id}`} name="notesTitles" 
        checked={+id === +activeNoteId} 
        onChange={() => onChange({ id })} />
    </li>);
  });
  return (
    <div className="notes-list">
      <input type="text" id="newNoteTitle" placeholder="Add new note title..." />
      <Button title="New" handle={newNote} classes="btn green-bg middle-btn" />
      <ul>
        { NotesTitles }
      </ul>
      <span>Filter by: { filterEnabled || 'none' }</span>
      <Button title="X" handle={() => filter(null)} classes="btn small-btn orange-bg" />
      <TagCloud tags={tags} deleteData={deleteData} filter={filter} />
    </div>
  )
}