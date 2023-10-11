import axios from "axios";
import { useState } from "react";
import './task.css';
import Item from "../TaskComponent";
import CreateTask from "../TaskComponent/CreateTask";
const Task=()=>{
    const [tasklist, setTaskList]=useState([])
    
    const [idupdate,setIdupdate]=useState('')
    const [showItem, setShowItem]=useState(false)
    const [showItem1, setShowItem1]=useState(false)
    

     const addtask=()=>{
        setShowItem1(!showItem1)
    }
    const getalltasks=()=>{
        axios.get('/get-all-tasks').then((res)=>{
            console.log(res.data)
            setTaskList(res.data)
        })
    }
    const updateTask=(e)=>{
        setShowItem(!showItem)
        var idup=e._id.toString()
        setIdupdate(idup)
        window.localStorage.setItem('id',idupdate)
        console.log('the element we are about to update', e.name)
        console.log('the element we are about to update', e._id.toString())
console.log('the element we are about to update', idupdate )
    }
    const deletTask=(e)=>{
alert("are you sur you want to delete this item")
console.log("the task we are about to delete", e)
axios.delete(`/delet-task/${e._id}`).catch((err)=>{
console.log('deleting failed because', err)
})
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
      <div className="task-elem elem-update" onClick={()=>updateTask(e)}>update</div>
      <div className="task-elem elem-delete" onClick={()=>deletTask(e)}>delete</div>
      </div>
      </div>)}
    </ul>
{showItem && <Item updateTask={updateTask} showItemvalue={showItem} id={idupdate} />}
{showItem1 && <CreateTask  showcreate={showItem1} />}


</div>)
}
export default Task; 