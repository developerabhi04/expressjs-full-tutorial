const path = require("path")
const express = require("express");

const app = express();
const PORT=8000;

// relative(../) path and absolute path(__dirname)
// console.log(__dirname);

const staticPath = path.join(__dirname, "../public");


// builtin middleware
app.use(express.static(staticPath));


app.get("/", (req, res) => {
    res.send("hello from abhishek");
})

app.get("/about", (req, res) => {
    res.send("helo from about");
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})