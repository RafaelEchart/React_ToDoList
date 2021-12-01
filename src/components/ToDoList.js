import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = (props) => (
  <React.Fragment>
    {props.data.map((toDo) => (
      <ToDoItem
        key={toDo.id}
        toDo={toDo}
        handleChangeProps={props.handleChangeProps}
        deleteTodoProps={props.deleteTodoProps}
        setUpdateProps={props.setUpdateProps}
      />
    ))}
  </React.Fragment>
);

export default ToDoList;
