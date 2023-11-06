import React from 'react'
import { useState } from 'react';

const AddTask = ({addTask}) => {
  const[value,setValue]=useState("");

  const addItem=()=>{
    addTask(value)
    setValue("")
  }
  return (
    <>
      <div className='input-container'>
        <input onChange={(e)=>{setValue(e.target.value);}} value={value} className='input' type='text' placeholder='Add new task' ></input>
        <button onClick={addItem} className='add-btn'>ADD</button>
      </div>
    </>
  )
}

export default AddTask
