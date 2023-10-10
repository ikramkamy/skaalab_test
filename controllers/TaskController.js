
const Task=require('../models/Task')
exports.addTask=(req,res)=>{
    const {name,status} = req.body;
    
    const myTask = new Task({ name,status});
    myTask.save(myTask).then(
     res=console.log('task added succesfully'),
   )
   
}


exports.getalltasks=(req,res)=>{
    Task.find().then((data) => {
      res.json(data)
      })
      .catch((err) => {
        res.json({
          err: err,
          message: "Une erreur c'est produite",
        });
      });
  }

  exports.updateTask= (req, res) => {
    console.log("WE ARE UPDATING task")
    
    const name=req.body.name;
    const status=req.body.status;
    Task.findByIdAndUpdate({_id:req.params._id},{
        name,
        status
    }).then(()=>{
    const taskupdated={name,status}
        res.json(taskupdated)
        console.log("UPDATE SUCCED",taskupdated)
    })
    
        .catch((err) => {
          console.log("UPDATE FAILED",err)
          res.json({
            err: err,
            message: "Une erreur c'est produite",
          });
        });
    
    }
    
  