const Todo = require("../models/Todo")

//01H 47M

const todosController = {
    getTodos : async (request, response) => {
        try{
            const todoItems = await Todo.find()
            const itemsLeft = await Todo.countDocuments({completed: false})  
            response.render("todos.ejs", {todos: todoItems, left: itemsLeft})
        }catch(err){
            console.log(err)
        }
    },
    createTodo : async (request, response) => {
        try{
            await Todo.create({todo: request.body.todoItem, completed: false})
            console.log("Todo has been added:", request.body.todoItem)
            response.redirect("/todos")
        }catch(err){
            console.log(err)
        }
    },
    markComplete : async (request, response) => {
        try{
            await Todo.findOneAndUpdate({_id:request.body.todoIdFromJSFile}, {
                completed: true,
            })
            console.log("Marked complete", request.body.todoIdFromJSFile)
            response.json("Marked complete")
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete : async (request, response) => {
        try{
            await Todo.findOneAndUpdate({_id:request.body.todoIdFromJSFile}, {
                completed: false,
            })
            console.log("Marked Incomplete", request.body.todoIdFromJSFile)
            response.json("Marked Incomplete")
        }catch(err){
            console.log(err)
        }
        //
    },
    deleteTodo : async (request, response) => {
        try{
            await Todo.findOneAndDelete({_id:request.body.todoIdFromJSFile})
            console.log("Deleted Todo", request.body.todoIdFromJSFile )
            response.json("Deleted Todo")
        }catch(err){
            console.log(err)
        }
    }
}

module.exports = todosController


