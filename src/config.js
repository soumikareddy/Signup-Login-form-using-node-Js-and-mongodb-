const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/Login-tut");
connect.then(()=>{
    console.log("Database connectd succesfully");
})
.catch(()=>{
    console.log("Database cannot be connectd");
});
//create a schema
const LoginSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
const collection = new mongoose.model("users",LoginSchema);
module.exports = collection;