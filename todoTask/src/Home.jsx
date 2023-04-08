import React, { useEffect, useState } from 'react';
import './HomeCss.css'
import vector_img from './Resources/task.png'
import avatar from './Resources/vector_avatar.png'
import plus from './Resources/plus.png'
import Axios from 'axios';
import Task from './Components/Task';
import { getAllTask } from './utils/HandleApi';
import {Routes, useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Home(){
    // const[data, setData] = useState([]);

    // const getData = async()=>{
    //     const response = await Axios.get("http://localhost:5000/getData");
    //     setData(response.data);
    //     console.log(response.data);
    // }

    // useEffect(()=>{
    //     getData();
    // },[]);
    // useEffect(()=>{
    //     fetch("http://localhost:5000/users",{
    //         method:"GET",
    //     })
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         console.log(data);
    //     })
    // },[])

    const [toDo, setToDo] = useState([]);

    useEffect(()=>{
        getAllTask(setToDo);
    },[toDo]);

    const navigate = useNavigate();
    const userName = localStorage.getItem('email');
    return (
        <div className="main-container">
            <h1 className='title'>To Do App</h1>
            <div className="backdrop">
                <div className="containerTask">
                    <div className="heading">
                        <h1></h1>
                        <h1>Upcoming Events</h1>
                        <div className="taskList">
                            {toDo.map((item)=><Task taskName={item.taskName} taskDescription={item.taskDescription} taskDueDate={item.taskDueDate} taskStatus={item.taskStatus} />)}
                                {/* task */}
                                {/* <Task taskName="taskName1" taskDescription="taskDescription" taskDueDate="taskDueDate" taskStatus="taskStatus" />
                                <Task taskName="taskName2" taskDescription="taskDescription" taskDueDate="taskDueDate" taskStatus="taskStatus" />
                                <Task taskName="taskName3" taskDescription="taskDescription" taskDueDate="taskDueDate" taskStatus="taskStatus" />
                                <Task taskName="taskName4" taskDescription="taskDescription" taskDueDate="taskDueDate" taskStatus="taskStatus" />
                                <Task taskName="taskName5" taskDescription="taskDescription" taskDueDate="taskDueDate" taskStatus="taskStatus" /> */}
                        
                    </div>
                    <div className="taskList">

                    </div>
                </div>
                </div>
                <div className="containerInfo">
                    <div className="userInfo">
                        <div className="userInfo_Name">
                            <h1>Hello,</h1>
                            <h2>{userName}</h2>
                        </div>
                        <div className="userInfo_avatar">
                            <div className='userInfo_avatar_back'>
                            <img src={avatar} alt="avatar" />
                            </div>
                        </div> 
                    </div>
                    {/* details about task */}
                    <div className="userInfo_details">
                            <div className="userInfo_details_task">
                                <h4>Upcoming tasks</h4>
                                <div className='taskAmount'>
                                    {/* add due date */}
                                    <h2>due date</h2>
                                </div>
                            </div>
                            <div className="userInfo_details_task">
                                <h4>All tasks</h4>
                                <div className='taskAmount'>
                                    {/* add amount of task */}
                                    <h2>123</h2>
                                </div>
                            </div>
                            <div className="userInfo_details_task">
                                <h4>Completed tasks</h4>
                                <div className='taskAmount'>
                                    {/* add due date */}
                                    <h2>12</h2>
                                </div>
                            </div>
                            <div className="userInfo_details_task">
                                <h4>uncompleted tasks</h4>
                                <div className='taskAmount'>
                                    {/* add due date */}
                                    <h2>due date</h2>
                                </div>
                            </div>
                    </div>
                    {/* Add new task-- create task*/}
                    <div className="userInfo_createTask">
                        <button id='createTaskButton' onClick={()=>{
                            navigate('/AddTaskForm')
                        }}>
                            <img src={plus} alt="add task" />
                            <h2>Create Task</h2>
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    
    )
}

export default Home;