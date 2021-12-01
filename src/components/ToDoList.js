import React, { useState, useEffect } from 'react';
import ToDoItem from './ToDoItem';
const ToDoList = (props) =>{
    
   

    
    return (
    <React.Fragment>
       {props.data.map((toDo)=>(
        <ToDoItem key={toDo.id} toDo={toDo} handleChangeProps={props.handleChangeProps} deleteTodoProps={props.deleteTodoProps} />
       ))}
    </React.Fragment>
    )
}

export default ToDoList;