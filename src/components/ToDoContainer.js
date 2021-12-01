import React, { useState, useEffect } from "react";
import {Route, Switch} from 'react-router-dom'
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import InputToDo from "./InputToDo";
import ToDoList from "./ToDoList";

const ToDoContainer = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const localStorageMemory = JSON.parse(localStorage.getItem('dataTasks'))

    if(localStorageMemory && localStorageMemory.length){
      setTodoList(localStorageMemory)
    } else {
      setTodoList([])
    }
   
  }, []);

  const handleChange = (id) => {
    setTodoList((prevState) => {
      let newState = prevState.map((toDoItem) => {
        if (toDoItem.id === id) {
          return {
            ...toDoItem,
            completed: !toDoItem.completed,
          };
        }
        return toDoItem;
      });

      localStorage.setItem('dataTasks', JSON.stringify(newState))
      return newState;
    });
  };

  const deleteToDo = id => {
    const newTaskList = todoList.filter(toDoItem => toDoItem.id !== id)
    setTodoList(newTaskList)
    localStorage.setItem('dataTasks', JSON.stringify(newTaskList))

  };

  const addTodoItem = title => {
    const newToDo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    setTodoList(prevState => [...prevState, newToDo])

    const localStorageMemory = JSON.parse(localStorage.getItem('dataTasks'))

    if(localStorageMemory && localStorageMemory.length){
      localStorageMemory.push(newToDo)
      localStorage.setItem('dataTasks', JSON.stringify(localStorageMemory))
    } else {
      let tempNewMemory = [newToDo]
      localStorage.setItem('dataTasks', JSON.stringify(tempNewMemory))
    }
    
  };

  const setUpdate = (updatedTitle, id) => {
    setTodoList((prevState) => {
      let newState = prevState.map((toDoItem) => {
        if (toDoItem.id === id) {
          return {
            ...toDoItem,
            title: updatedTitle
          };
        }
        return toDoItem;
      });

      localStorage.setItem('dataTasks', JSON.stringify(newState))
      return newState;
    });
  }

  return (
    

    <div className="container" >
      <div className="inner">
      <Header/>
      <InputToDo addTodoProps={addTodoItem}/>
      <ToDoList data={todoList} handleChangeProps={handleChange} deleteTodoProps={deleteToDo} setUpdateProps={setUpdate} />
      </div>
    </div>
  
  );
};

export default ToDoContainer;
