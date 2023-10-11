import axios from 'axios';
import { useState } from 'react';
const CreateTask =()=>{
    const [task, setTask]=useState({
        name:"",
        status:"uncompleted"
    })
const handelchange=(e)=>{
        setTask({
            name:e.target.value,
            status:task.status
        })}
        const handel2=(e)=>{
        
                setTask({
                    name:task.name,
                    status:e.target.value
                })
            
            }
    const addtask=()=>{
        if(task.name!=="" && task.status!==""){
        console.log('the task we are sending',task)
        axios.post('/add-task',task).then(()=>{
            alert("are you sure you want to add this task ?")
            console.log('the task we are sending')
           
            
            }).catch((err)=>{
                console.log("we have an error client side",err)
            }) 
        }
        else{
            alert("please fill empty fields!")
        }
    }
return(<div className="wrap-task-component creat_componenet">
<label>Task Name</label>
<input placeholder='Data base design'  value={task.name} onChange={handelchange}/>
<label>Task Status</label>
<select value={task.status} onChange={handel2}>
    <option>Completed</option>
    <option>Unompleted</option>
</select>


<button className="btn_update" onClick={addtask}>ADD</button>
</div>)
}
export default CreateTask; 