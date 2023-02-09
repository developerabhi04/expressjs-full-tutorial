const express = require("express");

const app = express();


const PORT=8000;



app.get("/", (req, res) => {
    res.send("hello from abhishek");
})

app.get("/about", (req, res) => {
    res.send("helo from about");
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})