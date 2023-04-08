import { useEffect, useState } from "react";
import './Addtaskformcss.css';
import logo_img from './img.png';
import back_img from './Resources/previous.png';
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Add_task_form(){
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskDueDate, setTaskDueDate] = useState("");
    const [taskStatus, setTaskStatus] = useState("Not Completed");
    const navigate = useNavigate();

    async function submit(e){
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/tasks",{
                taskName : taskName,
                taskDescription : taskDescription,
                taskDueDate : taskDueDate,
                taskStatus : taskStatus
            });
            console.log(response);
            navigate("/Home");
        } catch (error) {
            console.log(error);
            console.log("Error1");
        }
    }
   

    return(
        <div className="background">
            <div className="add_task_form" >
                <div>
                <button type="button" id="signOut" class="signOut" onClick={()=>{
                    navigate('/');
                }}><img src={back_img} id="back" ></img> </button>
                </div>
                <h1 className="tittle">Add Task</h1>
                <div className="image">
                    <img src={logo_img} alt="logo" id="imgId" />
                </div>
                <form className="inputFrom" id="inputFormId" >
                    <input type={"text"} placeholder="Task Name" id="name" className="listItems" value={taskName} onChange={(e)=>{
                        setTaskName(e.target.value);
                    }
                    }  />
                    <input type={"text"} placeholder="Task Description" id="description" className="listItems" 
                        value={taskDescription} 
                        onChange={(e)=>{
                            setTaskDescription(e.target.value);
                        }}
                    />
                    <input type={"datetime-local"} placeholder="Task Due Date" id="dueDate" className="listItems"
                        value={taskDueDate}
                        onChange={(e)=>{
                            setTaskDueDate(e.target.value);
                        }}
                    />
                    <input type={"text"} placeholder="Task Status" id="status" className="listItems" 
                        value={taskStatus} 
                        onChange={(e)=>{
                            setTaskStatus(e.target.value);
                        }}
                    />
                    {/* <input type={"text"} placeholder="Task Priority" id="taskPriority" className="listItems"  />
                    <input type={"text"} placeholder="Task Status" id="taskStatus" className="listItems"  />
                    <input type={"text"} placeholder="Task Category" id="taskCategory" className="listItems"  /> */}
                    
                    <button type="submit" id="addTask_button" onClick={submit}  >Add Task</button>
                </form>

            </div>

        </div>
    )
}

export default Add_task_form;