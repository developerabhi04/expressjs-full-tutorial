const express = require("express");
const path = require("path");
const hbs = require("hbs")
const app = express();
const requests = require("requests");
const port = 8000;



const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, "../templates/views")
const partialPath = path.join(__dirname, "../templates/partials")





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
    requests(
        `http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=e1a8bef725b7f4b56e03b655b93423b8`
        )

    .on("data", (chunk) => {
        const objData = JSON.parse(chunk)
        const arrData = [objData]
        console.log(`city name is ${arrData[0].name} and the temp is ${arrData[0].main.temp}`);
        // multiple array map 
        // const realTimeData = arrData.map((val) => replaceVal(homeFile, val)).join("");
            // console.log(val.main);
            
            res.write(arrData[0].name)
            // console.log(realTimeData);
       
    })
    .on("end",  (err) => {
        if (err) return console.log("connection closed due to error", err);
    
        // console.log("end");
        res.end();
    });
})





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




