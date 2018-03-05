var request = require("request");
request("https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", function(error, response, body) {
   if(!error && response.statusCode == 200) {
       var parsedData = JSON.parse(body);
    //   console.log(body); // we can use typeof to examine the type of var
       console.log(parsedData["query"]["count"], "The sunset time in Hawaii is " + parsedData["query"]["results"]["channel"]["astronomy"]["sunset"]);
   }
   else if(error){
       console.log("something went wrong. its error!");
       console.log(error);
   }
});