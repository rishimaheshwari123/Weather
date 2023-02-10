const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port  = process.env.PORT || 3000;

// public static path 
const staticPath = (path.join(__dirname, '../public'));
const template_path = (path.join(__dirname, '../template/views'));
const partial_path = (path.join(__dirname, '../template/partial'));

app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partial_path);

app.use(express.static(staticPath));


// roution 
app.get("/",(req, res)=>{
    res.render("index")
})
app.get("/about",(req, res)=>{
    res.render("about")
})
app.get("/weather",(req, res)=>{
    res.render("weather")
})
app.get("*",(req, res)=>{
    res.render("404error",{
        errorMsg:"Opps! Page Not Found"
    })
})

app.listen(port, () =>{
    console.log(`listning the port number ${port}`)
})