import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const ToDoItem = (props) => {
  const [editing, setEditing] = useState(false);
  const { id, title, completed } = props.toDo;

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleEditing = () => {
    setEditing(true);
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };
  return (
    <li className="item">
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className="checkbox"
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />

        <button onClick={() => props.deleteTodoProps(id)}><FaTrash/></button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input type="text" value={title} style={editMode} className="textInput" onChange={ (e) => props.setUpdateProps(e.target.value, id)} onKeyDown={handleUpdatedDone}/>
    </li>
  );
};

export default ToDoItem;
