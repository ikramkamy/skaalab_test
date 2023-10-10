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
   


})

const Task=mongoose.model('task',TaskSchema);
module.exports=Task;