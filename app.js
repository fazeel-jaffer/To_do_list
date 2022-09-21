const express = require('express');
const bodyParser = require("body-parser");
const date=require(__dirname+"/date.js");
const items = ["Namaz", "Breakfast", "College"];
let workitems=[];
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", function (req, res) {
      let day=date.getDate();
     res.render("list", { listtitle: day, newitems: items });
});
app.post("/", function (req, res) {
     var item = req.body.newitem;
     if(req.body.list==="Work"){
      workitems.push(item);
      res.redirect("/work");
     }
     else{items.push(item);
     res.redirect("/");
}
});
app.get("/work",function(req,res){
  res.render("list",{listtitle:"Work List",newitems:workitems});
});
app.post("/work",function(req,res){
 let item=req.body.newitem;
 workitems.push(item);
 res.redirect("/work");
});
app.listen(3000, function () {
     console.log("Server is running at port 3000");
});