import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import InputToDo from "./InputToDo";
import ToDoList from "./ToDoList";

const ToDoContainer = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    setTodoList([
      {
        id: 1,
        title: "Setup development environment",
        completed: true,
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: true,
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false,
      },
    ]);
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

      return newState;
    });
  };

  const deleteToDo = id => {
    setTodoList(todoList.filter(toDoItem => toDoItem.id !== id))
  };

  const addTodoItem = title => {
    const newToDo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    setTodoList(prevState => [...prevState, newToDo])
  };

  return (
    <div className="container" >
      <div className="inner">
      <Header/>
      <InputToDo addTodoProps={addTodoItem}/>
      <ToDoList data={todoList} handleChangeProps={handleChange} deleteTodoProps={deleteToDo} />
      </div>
    </div>
  );
};

export default ToDoContainer;
