// const express = require("express");
// const path = require("path");
// const app = express();
// const port = 8000;



// const staticPath = path.join(__dirname, '../public');

// // built in midleware
// app.use(express.static(staticPath))




// app.get("/", (req,res) => {
//     res.send("response from server")
// });


// app.listen(port, () => {
//     console.log(`server is running on ${port}`);
// });




const express = require("express");
const path = require("path");
const hbs = require("hbs")
const app = express();
const port = 8000;



const staticPath = path.join(__dirname, '../public');

// for changing folder views to template 7
const templatePath = path.join(__dirname, "../templates/views")

const partialPath = path.join(__dirname, "../templates/partials")

// built in midleware




// to set the view engine 6
app.set("view engine", "hbs");
// for changing folder template 7
app.set("views", templatePath);


// this help to connect partial 
hbs.registerPartials(partialPath)




app.use(express.static(staticPath))
 
// template engine route 6
app.get("/", (req, res) => {
    res.render("index",{
        name: "Home",
        myname: "About"
    })
})

app.get("/about", (req, res) => {
    // console.log(req.query);    //http://localhost:8000/about?name=ranchi      http://localhost:8000/about?name=ranchi&aname=pak
    res.render("about",{
        myname: req.query.name
    })
})
app.get("/", (req, res) => {
    res.render("mainData")
})

// app.get("/", (req,res) => {
//     res.send("response from server")
// });


// 404 error page ./hggh/
app.get("/about/*", (req, res) => {
    res.render("404",{
        errorcomment : "Oops! The about pages couldn't be found "
    })
})
// 404 error page ./
app.get("*", (req, res) => {
    res.render("404",{
        errorcomment : "Oops! The pages couldn't be found"
    })
})



app.listen(port, () => {
    console.log(`server is running on ${port}`);
});



