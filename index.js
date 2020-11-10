// require express
const express = require('express');

const port=8000;

// mongoose
const db=require('./config/mongoose');

//schema
const Todo = require('./models/todo');

const app = express();

//set up view engine
app.set('view engine','ejs');

app.set('views','./views');

//middleare to append new contact
app.use(express.urlencoded());

//middleware to access static files
app.use(express.static('assets'));




//home page
app.get('/',function(req,res)
{
    // fetch ffrom db and show it

    Todo.find({},function(err,descriptions)
    {
        if (err)
        {
            console.log('Error in fetchinh description from db');
            return;
        }
    return res.render('home',{
        title:"To-do app",
        to_do : descriptions
    });
});
});

//creating new todo

app.post('/create-todo',function(req,res)
{
    Todo.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date
    },function(err,newTodo)
    {
        if(err)
        {
            console.log('error in creating the todo');
            return;
        }
        else
        
        {
            console.log('******',newTodo);
            return res.redirect('back'); 
        }
    });
});


//deleting todo
app.get('/delete-todo',function(req,res)
{
    let desc=req.query.id;
    //find the todo in the db using id and delete

    Todo.findByIdAndDelete(id,function(err)
    {
        if (err)
        {
            console.log('error in deleting an obj from db');
            return;
        }

        return res.redirect('back');
    });
});

app.listen(port,function(err)
{
    if (err)
    {
        console.log(`error in running the server ${err}`);
    }
    else{
        console.log(`Yup ! My express server is running on port ${port}`);
    }
});