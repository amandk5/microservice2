const express = require("express");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
    try {
        const data = await fetch("http://localhost:3001/");
        const json = await data.text();
        res.send("Hello World from Service 2! " + json);
    } catch (err) {
        res.send("Error");
    }
});

app.listen(3002, () => {
    console.log("Service 2 is running on port 3002");
});