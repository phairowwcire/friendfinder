var express = require("express");
var app = express();
var apiRoutes = require("./app/routing/apiRoutes");
apiRoutes(app);

var htmlRoutes = require("./app/routing/htmlRoutes");
htmlRoutes(app);
var Port = process.env.PORT || 8080;
app.use(express.static("./app/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(Port, function(error) {
  if (error === true) {
    console.log(error);
  }
  console.log("app is listening http://localhost:" + Port);
});
