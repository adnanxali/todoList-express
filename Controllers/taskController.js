const Task=require('../models/tasks');
const asyncHandler=require('express-async-handler');
const {body,validationResult}=require('express-validator');

exports.task_list_get=asyncHandler(async function(req,res,next){
    const allTask=await Task.find({},"title due_date is_complete").exec();
    res.render("homepage",{
        title:"To Do List",
        task_list:allTask
    })
});
exports.task_list_post=asyncHandler(async function(req,res,next){
    res.send("Not Implemented");
});
exports.task_create_get=asyncHandler(async function(req,res,next){
    res.send("Not Implemented");
});
exports.task_create_post=asyncHandler(async function(req,res,next){
    res.send("Not Implemented");
});

exports.task_detail_get=asyncHandler(async function(req,res,next){
    const task= await Task.findById(req.params.id).exec();
    if(task===null){
        const err=new Error("This task does not exist !")
        err.status(404)
        next(err);
    }else{
        res.render("task_detail",{
            title:task.title,
            task:task
        })
    }
    
});
exports.task_update_get=asyncHandler(async function(req,res,next){
    res.send("Not Implemented");
});
exports.task_update_post=asyncHandler(async function(req,res,next){
    res.send("Not Implemented");
});
exports.task_delete_get=asyncHandler(async function(req,res,next){
    res.send("Not Implemented");
});
exports.task_delete_post=asyncHandler(async function(req,res,next){
    res.send("Not Implemented");
});