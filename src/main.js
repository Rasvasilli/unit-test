// src/main.js
import express from "express";
import calc from "./calc.js";

const app = express();
const port = 3000;
const host = "localhost";

// Endpoint - GET http://localhost:3000/
app.get('/', (req, res) => {
    res.status(200).send('Hello world');
});

app.get('/add', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const result = calc.sum(a, b);
    res.status(200).send(result.toString()); // Convert the result to a string before sending
});

app.listen(port, host, () => {
console.log(`Server: http://localhost:${port}`);
});