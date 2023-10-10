const express= require ('express');
const router=express.Router();
const {addTask , getalltasks, updateTask}=require('../controllers/TaskController');
router.post('/add-task',addTask);
router.post('/update-task/:_id',updateTask);
router.get('/get-all-tasks',getalltasks);

module.exports=router;