var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/results", function(req, res) {
    var query = req.query.search;
    var url = "http://omdbapi.com/?s=" + query + "&apikey=thewdb";
    request(url, function(error, response, body) {
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            // res.send(results["Search"][0]);
            res.render("results", {data:data});
       }
       else if(error){
           console.log("something went wrong. its error!");
           console.log(error);
       }
    });
});

app.get("/", function(req, res) {
   res.render("search"); 
});

app.listen(process.env.PORT, process.env.IP, function() {
   console.log("Operation Start."); 
});