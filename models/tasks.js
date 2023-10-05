const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const {DateTime}=require('luxon');

const TaskSchema= new Schema({
    title:{type:String, required:true, maxLength:100},
    description:{type:String,required:true,maxLength:100},
    due_date:{type:Date,default:Date.now},
    is_complete:{type:Boolean,default:false}
});
TaskSchema.virtual("url").get(function(){
    return `/tasklist/${this._id}`
})
TaskSchema.virtual("due_date_ff").get(function(){
    return DateTime.fromJSDate(this.due_date).toLocaleString(DateTime.DATETIME_SHORT)
})
module.exports=mongoose.model("Task",TaskSchema);