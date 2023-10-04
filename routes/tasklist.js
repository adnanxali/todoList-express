const express=require('express');
const router= express.Router();

const task_controller=require('../Controllers/taskController');


// Routes to handle task list and completion of task

router.get('/',task_controller.task_list_get);
//router.post('/',task_controller.task_list_post); i might use in future to mark task as complete on page itself.

//detail about a task
router.get('/:id',task_controller.task_detail_get);

//Create New tasks
router.get('/create',task_controller.task_create_get);
router.post('/create',task_controller.task_create_post);

//Update a Task
router.get('/:id/update',task_controller.task_update_get);
router.post('/:id/update',task_controller.task_update_post);

//Delete a Task
router.get('/:id/delete',task_controller.task_delete_get);
router.post('/:id/delete',task_controller.task_create_post);


module.exports=router;

