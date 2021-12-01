const ToDoItem = (props) => {
  const { id, title, completed } = props.toDo;

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }
  
  return (
    <li className="item">
      <input
        type="checkbox"
        className="checkbox"
        checked={completed}
        onChange={() => props.handleChangeProps(id)}
      />

      <button onClick={() => props.deleteTodoProps(id)}>Delete</button>
      <span style={completed ? completedStyle : null}>{title}</span>
    </li>
  );
};

export default ToDoItem;
