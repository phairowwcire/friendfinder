var friends = require("../data/friends")


function apiRoutes(app){
  app.get("/api/friends",function(req,res){
      res.json(friends)
  })
}
module.exports = apiRoutes

