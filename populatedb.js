const Task=require('./models/tasks');
console.log(
    'This script populates some task to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
  );
  
  // Get arguments passed on command line
  const userArgs = process.argv.slice(2);
  
  
  const mongoose = require("mongoose");
  mongoose.set("strictQuery", false);
  
  const mongoDB = userArgs[0];
  
  main().catch((err) => console.log(err));
  
  async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB);
    console.log("Debug: Should be connected?");
    await taskpop();
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
  }

async function createTask(title,description,due_date,is_complete){
    const task = new Task({
        title:title,
        description:description,
        due_date:due_date,
        is_complete:is_complete
    })

    await task.save();
    console.log("Added Task");
}
async function taskpop(){
    console.log("Adding Task");
    await Promise.all([
        createTask("Washing Dishes","To wash all the dishes",19-10-2023,false),
        createTask("Complete Homework","Complete Maths Homework",19-10-2023,false),
        createTask("Dinner","Dinner with Stacy",19-10-2023,true)
    ])
}