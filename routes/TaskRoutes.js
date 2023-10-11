const express= require ('express');
const router=express.Router();
const {addTask , getalltasks, updateTask, DeleteTask}=require('../controllers/TaskController');
router.post('/add-task',addTask);
router.post('/update-task/:_id',updateTask);
router.get('/get-all-tasks',getalltasks);
router.delete('/delet-task/:_id', DeleteTask);
module.exports=router; 