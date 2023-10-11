const mongoose = require("mongoose");
const TaskSchema= new mongoose.Schema({

    name:{
        type:String,
        default:"task",
    },
    status:{ 
        type:String,
        default:"uncompleted",
    },
createdat:{
type: Date,
default: Date.now
},
})

const Task=mongoose.model('task',TaskSchema);
module.exports=Task;