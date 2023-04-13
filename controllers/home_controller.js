const Todo = require("../models/todo");

module.exports.home = async (req, res) => {
  let todos = await Todo.find({});
  return res.render("home/home", { todos: todos });
};

module.exports.create = function (req, res) {
  Todo.create({
    description: req.body.description,
    category: req.body.category,
    due_date: req.body.due_date,
  });
  res.redirect("/");
};

module.exports.delete = async (req, res) => {
  await Todo.deleteOne({ _id: req.body.checkbox_id });
  res.redirect("/");
};
