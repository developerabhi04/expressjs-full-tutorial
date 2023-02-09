

const express = require("express");
const path = require("path");
const hbs = require("hbs")
const app = express();
const port = 8000;



// built in midleware

// const staticPath = path.join(__dirname, '../public');

// for changing folder views to template 7
const templatePath = path.join(__dirname, "../templates/views")

const partialPath = path.join(__dirname, "../templates/partials")





// to set the view engine 6
app.set("view engine", "hbs");
// for changing folder template 7
app.set("views", templatePath);

hbs.registerPartials(partialPath)




// app.use(express.static(staticPath))
 
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



