let todos = [];

module.exports.home = function (req, res) {
  return res.render("home/home", { title: "home", todos: todos });
};

module.exports.create = function (req, res) {
  todos.push(req.body);
  res.redirect("/");
};

module.exports.delete = function (req, res) {
  todos.pop();
  res.redirect("/");
};
