var express = require('express');
var app = express();
var reddit = require('./api/reddit');


app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendStatus(200);
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
  //reddit.init();
});
