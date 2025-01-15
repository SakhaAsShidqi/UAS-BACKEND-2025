// Import express dan router
const express = require("express");
const router = require("./routes/api");
const app = express();
const bodyParser = require('body-parser');



// Menggunakan middleware untuk parsing JSON
app.use(express.json());

// Tambahkan rute untuk root '/'
app.get("/", (req, res) => {
    res.send("Welcome to the home page!");
});

// Menambahkan prefix '/api' untuk router
app.use("/api", router);

// Menjalankan server di port 3000
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

