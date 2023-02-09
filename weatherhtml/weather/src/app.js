const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

const publicPath = path.join(__dirname, "../public");

app.use(express.static(publicPath));


app.get("", (req,res) => {
    res.send("welcome")
});

app.get("/about", (req, res) => {
    res.send("about page");
})

app.get("/weather", (req, res) => {
    res.send("weather appp");
})

app.get("*", (req, res) => {
    res.send("404 error page");
})





app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})