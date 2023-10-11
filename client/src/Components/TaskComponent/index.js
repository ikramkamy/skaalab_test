import { useState } from "react";
import axios from 'axios';

const Item=(showItemvalue, id)=>{
    const [showItem, setShowItem]=useState(showItemvalue)
    const [input, setInput] =useState({
        name:"",
        status:""
    })
const handelchange=(e)=>{
setInput({
    name:e.target.value,
    status:input.status
})}
const handel2=(e)=>{

        setInput({
            name:input.name,
            status:e.target.value
        })
    
    }
    const updateTask=()=>{
     
        setShowItem(!showItem)
      const idu= window.localStorage.getItem('id')
      console.log("the id",idu)
     console.log("the rout for update request", `/update-task/${idu}` )   
axios.post(`/update-task/${idu}`,input).then(()=>{

}).catch((err)=>{
    console.log("error in updating",err)
})

    }
    return( <div className="wrap-task-component">
 <label>Task Status</label>
<select value={input.status} onChange={handel2} >
    <option>Completed</option>
    <option>Unompleted</option>
</select>

<label>Task Name</label>
<input placeholder='Data base design' value={input.name} onChange={handelchange}/>
<button className="btn_update" onClick={updateTask}>Send</button>
    </div>)
}
export default Item;