// models/todoModel.js
const pool = require("../db");

// Get all todos
const getAllTodos = async () => {
    const result = await pool.query("SELECT * FROM todo");
    return result.rows;
};

// Get a todo by ID
const getTodoById = async (id) => {
    const result = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
    return result.rows[0];
};

// Create a new todo
const createTodo = async (description) => {
    const result = await pool.query("INSERT INTO todo(description) VALUES($1) RETURNING *", [description]);
    return result.rows[0];
};

// Update a todo
const updateTodo = async (id, description) => {
    await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);
};

// Delete a todo
const deleteTodo = async (id) => {
    await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
};

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
};
