import React, { useEffect } from 'react';
import "./todo.css";
import AddTask from "./AddTask";
import ListTask from "./ListTask";
import {useState} from "react";

const Todo = () => {
  const [tasks,setTasks]=useState([ ])

  useEffect(()=>{
    document.title= `You have ${tasks.length} pending task(s)`
  })

  const addTask =(title)=>{
    const newTask =[...tasks,{title}]
    setTasks(newTask);
    
  }

  const removeTask=(index)=>{
      const newTask=[...tasks]
      newTask.splice(index,1)
      setTasks(newTask)
  }


  return (
    <>
      <div className='todo-container'>
        <div className='header'>TODO APP</div>
        <div className='add-task'>
          return <AddTask addTask={addTask}/>
        </div>
        <div className='tasks'>
          {tasks.map((task, index)=>{
            return <ListTask task={task} removeTask={removeTask} index={index} />
          })}
          
          </div>
      </div>
    </>
  )
}

export default Todo
