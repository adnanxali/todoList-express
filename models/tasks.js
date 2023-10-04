const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const TaskSchema= new Schema({
    title:{type:String, required:true, maxLength:100},
    description:{type:String,required:true,maxLength:100},
    due_date:{type:Date,default:Date.now},
    is_complete:{type:Boolean,default:false}
});
TaskSchema.virtual("url").get(function(){
    return `/tasklist/${this._id}`
})
module.exports=mongoose.model("Task",TaskSchema);