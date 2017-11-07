var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('deck_alchemist_development', ['deck_alchemist_development']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/userList', function (req, res) {
  console.log("I received a GET request")
  db.deck_alchemist_development.find(function(err, docs){
    console.log(docs);
    res.json(docs);
  });
});

app.post('/userList', function (req, res) {
  console.log(req.body);
  db.deck_alchemist_development.insert(req.body, function(err, doc) {
    console.log(doc);
    res.json(doc);
  })
});

app.delete('/contactlist/:id', function (req, res){
  var id = req.params.id;
  console.log(id);
  db.deck_alchemist_development.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
    res.json(doc);
  })
});

app.listen(3000);
console.log("server running on port 3000");
