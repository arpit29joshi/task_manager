const Task = require("../models/task");
const { ObjectId } = require("mongoose");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../customError/customError");
//get all task
const getAllTask = asyncWrapper(async (req, res) => {
  const task = await Task.find({});
  // return res.status(200).json({ task });
  // return res.status(200).json({ task, amount: task.length });
  return res
    .status(200)
    .json({ success: true, data: { task, nHits: task.length } });
});
//create a task
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  return res.status(201).json({ task });
});
//get single task
const getSingleTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.find({ _id: req.params.id });
  if (!task) {
    console.log("first");
    return next(createCustomError("No task found", 404));
  }
  return res.status(201).json({ task });
});
//update task
const updateTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true, runValidators: true } //new:true (return updtede data,runValidators: true(add validators to sending data))
  );
  if (!task) {
    return next(createCustomError("No task found", 404));
  }
  return res.status(201).json({ task });
});
//delete task
const deleteTask = asyncWrapper(async (req, res) => {
  const task = await Task.findByIdAndDelete({ _id: req.params.id });
  if (!task) {
    return res.status(404).json({ msg: "no task found" });
  }
  return res.status(201).json({ task: null, status: "success" });
});
module.exports = {
  getAllTask,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
