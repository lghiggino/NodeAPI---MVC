const Todo = require("../models/Todo")

const apiController = {
    getTodos : async (request, response) => {
        try{
            const todoItems = await Todo.find()
            response.json(todoItems)
        }catch(err){
            console.log(err)
        }
    }
}

module.exports = apiController