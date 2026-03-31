const mysql = require("mysql2");

// créer la connexion
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "express",
  port: 3307
});

// connecter
db.connect((err) => {
  if (err) {
    console.error("Erreur connexion DB :", err);
  } else {
    console.log("Connecté à MariaDB ✅");
  }
});

module.exports = db;