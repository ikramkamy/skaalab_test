import { useState } from "react";
import axios from 'axios';

const Item=(showItemvalue, _id)=>{
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
        console.log(input)
        setShowItem(!showItem)
        
axios.post(`/update-task/${_id}`,input).then(()=>{

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