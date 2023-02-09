const express = require("express");

const App = express();
const PORT= 7000;


App.get("/", (req, res) => {
    res.write("<h1>hello from home page</h1>");
    res.write("<h1>hello from home hhhhhhhh page</h1>");
    res.send();
})

App.get("/about", (req, res) => {
    res.send({
        id: 1,
        name: "shan"
    });
})


App.get("/array", (req, res) => {
    res.send([
        {
        id: 1,
        name: "shan"
        },
        {
        id: 2,
        name: "shan"
        },
        {
        id: 3,
        name: "shan"
        },
        {
        id: 4,
        name: "shan"
        },
        {
        id: 5,
        name: "shan"
        },
    ]);
})

App.get("/contact", (req,res) => {
    res.status(200).send("hello from contact page");
})



App.listen(PORT, () => {
    console.log(`server is running on : ${PORT}`);
})