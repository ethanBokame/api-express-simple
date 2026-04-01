const db = require("../conn");

exports.getUsers = (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      return res.status(500).json(
        {
        'status': 'error',
        'message': 'Failed to retrieve users',
        'error': err
        }
      );
    }
    
    res.json({
      'status': 'success',
      'data': results,
      'message': 'Users retrieved successfully'
    });
  });
};

exports.getUser = (req, res) => {
  db.query("SELECT * FROM users WHERE id = ?", [req.params.id], (err, results) => {
    if (err) return res.status(500).json(
      {
        'status': 'error',
        'message': 'Failed to retrieve user',
        'error': err
      }
    );
    res.json(
      {
        'status': 'success',
        'data': results,
        'message': 'User retrieved successfully'
      }
    );
  });
};

exports.createUser = (req, res) => {
  db.query("INSERT INTO users SET ?", req.body, (err, results) => {
    if (err) return res.status(500).json(
      {
        'status': 'error',
        'message': 'Failed to create user',
        'error': err
      }
    );
    res.json(
      {
        'status': 'success',
        'data': results,
        'message': 'User created successfully'
      }
    );
  });
};

exports.updateUser = (req, res) => {
  db.query("UPDATE users SET ? WHERE id = ?", [req.body, req.params.id], (err, results) => {
    if (err) return res.status(500).json(
      {
        'status': 'error',
        'message': 'Failed to update user',
        'error': err
      }
    );
    res.json(
      {
        'status': 'success',
        'data': results,
        'message': 'User updated successfully'
      }
    );
  });
};

exports.deleteUser = (req, res) => {
  db.query("DELETE FROM users WHERE id = ?", [req.params.id], (err, results) => {
    if (err) return res.status(500).json(
      {
        'status': 'error',
        'message': 'Failed to delete user',
        'error': err
      }
    );
    res.json(
      {
        'status': 'success',
        'data': results,
        'message': 'User deleted successfully'
      }
    );
  });
};