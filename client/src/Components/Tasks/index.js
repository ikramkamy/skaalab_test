import axios from "axios";
import { useState } from "react";
import './task.css';
import Item from "../TaskComponent";
const Task=()=>{
    const [tasklist, setTaskList]=useState([])
    const [newTask, setNewTask]=useState([])
    const [idupdate,setIdupdate]=useState([])
    const [showItem, setShowItem]=useState(false)
    const [task, setTask]=useState({
        name:"task one",
        status:"uncompleted"
     })

     const addtask=()=>{
        console.log('the task we are sending')
        axios.post('/add-task',task).then(()=>{
            alert("are you sure you want to add this task ?")
            console.log('the task we are sending')
            
            }).catch((err)=>{
                console.log("we have an error client side",err)
            }) 
    }
    const getalltasks=()=>{
        axios.get('/get-all-tasks').then((res)=>{
            console.log(res.data)
            setTaskList(res.data)
        })
    }
    const updateTask=(e)=>{
        setShowItem(!showItem)
        setIdupdate(e._id)
console.log('the element we are about to update', e)
    }
    const deletTask=()=>{

    }
return(<div className="first-page">
    <h3>Task list</h3>
    <button onClick={addtask}>Add task</button>
    <button onClick={getalltasks}>Show all tasks</button>
    <ul>
    <div className="wrap-task ">
    <div className="statusTastk">Task </div>
    <div className="statusTastk">Status</div> 
    <div className="task-elem"></div>
      <div className="task-elem"></div>
    </div>
      {tasklist.map((e)=><div>
      <div className="wrap-task">
      <div className="task-elem">{e.name}</div> 
      <div className="task-elem">{ e.status}</div>
      <div className="task-elem" onClick={()=>updateTask(e)}>update</div>
      <div className="task-elem" onClick={deletTask}>delete</div>
      </div>
      </div>)}
    </ul>
{showItem && <Item updateTask={updateTask} showItemvalue={showItem} _id={idupdate} />}


</div>)
}
export default Task; 