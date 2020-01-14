export const formatTag = () => {
  const input = document.getElementById('newTadName'); // если только из инпута - то уже нет смысла от функции
  const strToSave = input.value.trim().replace(/ /g, '_');
  input.value = '';
  return strToSave;
}

export const getNoteObj = (id) => {
  let title = document.getElementById('editNoteTitle').value;
  if (title === '') {
    title = `Unnamed note №${id}`;
  }
  const text = document.getElementById('noteText').innerText;
  const tagsArr = collectTags();
  const tags = tagsArr.join(',');
  return {[id]: {id, title, text, tags}};
}

export const collectTags = () => {
  const tagsArr = [];
  document.querySelectorAll('#noteTags span').forEach(el => tagsArr.push(el.innerText));
  return tagsArr;
}

export const injectTags = (note, tags) => {
  tags.map(t => formatTag(t))
  note.tags = uniqueArr(tags).join(',');
  return {[note.id]: note};
}

export const uniqueArr = (arr) => {
  return [...new Set(arr)];
}