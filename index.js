const express = require("express");

const app = express();

const PORT = process.env.PORT || 8800;

app.use(express.json());

// GET
app.get("/", (req, res) => {
    res.send("Node.js Server is Running");
});

// GET
app.get("/allstudent", (req, res) => {
    res.send("Get all students");
});

app.get("/Homepage", (req, res) => {
    res.send("Here is your dashboard");
});
// POST
app.post("/Signup", (req, res) => {
    res.send("Student added");
});

// Post
app.post("/login", (req, res) => {
    res.send("Student completely updated");
});

app.get("/student", (req, res) => {
    res.send("Get all students");
});

// PATCH
app.patch("/updatestudent", (req, res) => {
    res.send("Student partially updated");
});

// DELETE
app.delete("/deletestudent", (req, res) => {
    res.send("Student deleted");
});

// Start Server
app.listen(8800, () => {
    console.log("Server running on port 8800");
});