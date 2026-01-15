import React, { useState } from "react";
function ToDoList() {
  const [tasks, setTasks] =useState([])
  const [newTask, setNewTask] =useState("")

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if(newTask.trim()!==""){
      setTasks(t=>[...t,newTask])
      setNewTask("")
    }
  }
  function deleteTask(index) {
    const updatedTasks=tasks.filter((_,i)=>i!==index)
    setTasks(updatedTasks)
  }
  return (
    <div className="to-do-list-container">
      <h1>To-Do-List App</h1>
      <div className="input-add-container">
        <input
          type="text"
          placeholder="Enter a Task..."
          value={newTask}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button className="add-button" onClick={addTask}>Add</button>
      </div>
      <ol>
        {tasks.map((task,index)=>
           <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button"
                    onClick={()=>deleteTask(index)}>
                    Delete
            </button>
          </li>    
        )}
      </ol>
    </div>
  );
}
export default ToDoList;
