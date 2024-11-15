// controllers/todoController.js
const todoModel = require("../models/todoModel");

// Get all todos
const getAllTodos = async (req, res) => {
    try {
        const todos = await todoModel.getAllTodos();
        res.json(todos);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
};

// Get a todo by ID
const getTodoById = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await todoModel.getTodoById(id);
        res.json(todo);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
};

// Create a new todo
const createTodo = async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await todoModel.createTodo(description);
        res.json(newTodo);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
};

// Update a todo
const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        await todoModel.updateTodo(id, description);
        res.json("Todo updated");
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
};

// Delete a todo
const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await todoModel.deleteTodo(id);
        res.json("Todo deleted");
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
};
