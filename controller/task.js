//get all task
const getAllTask = async (req, res) => {
  res.send("getall");
};
//create a task
const createTask = async (req, res) => {
  res.send("create");
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
