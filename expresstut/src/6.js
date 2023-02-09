const express = require("express");
const path = require("path");
const app = express();
const port = 8000;



// const staticPath = path.join(__dirname, '../public');

// for changing folder views to template 7
const templatePath = path.join(__dirname, "../templates")

// built in midleware
// app.use(express.static(staticPath))



// to set the view engine 6
app.set("view engine", "hbs");
// for changing folder template 7
// app.set("views", templatePath);

 
// template engine route 6
app.get("", (req, res) => {
    res.render("index",{
        name: "abhishek",
        myname: "dhoni"
    })
})



app.get("/", (req,res) => {
    res.send("response from server")
});


app.listen(port, () => {
    console.log(`server is running on ${port}`);
});



