import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import vector_img from "../Resources/task.png";
import "./Task.css";
import axios from "axios";

const Task = ({ taskName, taskDescription, taskDueDate,taskStatus }) => {
    async function deleteTask(){
        const response = await axios.delete("http://localhost:5000/tasks/me")
    }
    return (
        <div className="allTask">
        <div className='task'>
            <div className="taskImg">
                <img src={vector_img} alt="taskImg" />
            </div>
            <div className="taskContent">
                <h2>Name : {taskName}</h2>
                <h3>Description : {taskDescription}</h3>
                <h3>Due Date : {taskDueDate}</h3>
                <h4>Status : {taskStatus}</h4>
            </div>
            <div className="taskItems">
                <div className="taskItemsContents">
                <h5>Edit task</h5>
                <BiEdit className="icon" />
                </div>
                <div className="taskItemsContents">
                <h5>Delete Task</h5>
                <AiFillDelete className ="icon" onClick={deleteTask} />
                </div>
            </div>
        </div>
        
        </div>
    )
};

export default Task;