
//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
let items=[];
const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));



app.get("/",function(req,res){
    let today = new Date();
    
    let options = {
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    let day = today.toLocaleDateString("en-US",options);

    res.render("index",{typeOfDay : day,newListItem : items});
});

app.post("/",function(req,res){
    let info = req.body.newItem;
    items.push(info);
    res.redirect("/");
});



app.listen(3000,function(){
    console.log("Listening to port 3000");
});