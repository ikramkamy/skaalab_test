
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
    const _id=req.params._id ;
    Task.findOneAndUpdate({"id":req.params._id },{
        name:req.body.name,
        status:req.body.status
    }).then(()=>{
    const taskupdated={name,status,_id}
        res.json(taskupdated)
        console.log("UPDATE SUCCED")
    })
    
        .catch((err) => {
          console.log("UPDATE FAILED",err)
          console.log("UPDATE FAILED because of id ",_id)
          res.json({
            err: err,
            message: "Une erreur c'est produite",
          });
        });
    
    }
    exports.DeleteTask=(req,res)=>{

      Task.findOneAndDelete({ "_id": req.params._id}).then(()=>{
        console.log('task deleted succesfully')
      }).catch((err)=>{
        console.log("error deleting task",err)
      })
    
    }
    
  