const Task = require("../models/task");
//get all task
const getAllTask = async (req, res) => {
  res.send("getall");
};
//create a task
const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};
//get single task
const getSingleTask = async (req, res) => {
  res.send("single");
};
//update task
const updateTask = async (req, res) => {
  res.send("update");
};
//delete task
const deleteTask = async (req, res) => {
  res.send("delete");
};
module.exports = {
  getAllTask,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
