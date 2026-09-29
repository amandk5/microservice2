require('dotenv').config();
const express = require("express");
const service1Url = process.env.service_1_url_prod;

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
    try {
        const data = await fetch(service1Url);
        const json = await data.text();
        res.send("Hello World from Service 2! " + json);
    } catch (err) {
        res.send("Error");
    }
});

app.listen(3002, () => {
    console.log("Service 2 is running on port 3002");
});