//req the library
const mongoose=require('mongoose');

// create schema
const todoSchema=new mongoose.Schema({
        description:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true
        },
        date:{
            type:Date,
            required:true
        }
    });

const Todo = mongoose.model('Todo',todoSchema);

module.exports = Todo;

    

