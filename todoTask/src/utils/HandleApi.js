import axios from "axios";

const baseUrl = "http://localhost:5000";

const getAllTask = (setToDo)=>{
    axios.get(baseUrl+"/tasks/me").then((response)=>{
        setToDo(response.data);
    }).catch((err)=>{
        console.log(err);
    });
}

// const addTask = async(e)=>{
//     e.preventDefault();
//     const submitData ={
//         taskName : e.target.taskName.value,
//         taskDescription : e.target.taskDescription.value,
//         taskDueDate : e.target.taskDueDate.value,
//         taskStatus : e.target.taskStatus.value,
//     };
//     const response = await axios.post(baseUrl+"/tasks",submitData);
//     console.log(response);
// }

const addTask = (task)=>{
    axios.post(baseUrl+"/tasks/me",task)
    .then((data)=>{
        console.log(data);
        
    })
}
export {getAllTask,addTask};