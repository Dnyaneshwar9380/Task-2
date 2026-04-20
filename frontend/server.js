const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('http://<backend-public-ip>:5000/');
        res.send(`
            <h1>Frontend (Express)</h1>
            <p>${response.data.message}</p>
        `);
    } catch (error) {
        res.send("Error connecting to backend");
    }
});

app.listen(3000, '0.0.0.0', () => {
    console.log("Frontend running on port 3000");
});