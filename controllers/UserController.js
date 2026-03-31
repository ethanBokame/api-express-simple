const db = require("../conn");

exports.getUsers = (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getUser = (req, res) => {
  db.query("SELECT * FROM users WHERE id = ?", [req.params.id], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.createUser = (req, res) => {
  db.query("INSERT INTO users SET ?", req.body, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.updateUser = (req, res) => {
  db.query("UPDATE users SET ? WHERE id = ?", [req.body, req.params.id], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.deleteUser = (req, res) => {
  db.query("DELETE FROM users WHERE id = ?", [req.params.id], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};