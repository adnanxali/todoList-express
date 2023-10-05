const Task=require('../models/tasks');
const asyncHandler=require('express-async-handler');

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
    res.send("Not Implemented");
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