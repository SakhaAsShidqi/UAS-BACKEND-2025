const mysql = require("mysql");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",        // Host default MySQL
    user: process.env.DB_USER || "root",             // Username MySQL Anda
    password: process.env.DB_PASSWORD || "",         // Password MySQL Anda, kosong jika default XAMPP
    database: process.env.DB_NAME || "express_covid_api" // Ganti dengan nama database Anda
});

db.connect((err) => {
    if (err) {
        console.error("Error connecting:", err.message);
    } else {
        console.log("Connected to database.");
    }
});

module.exports = db;