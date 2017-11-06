var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/userList', function (req, res) {
  console.log("I received a GET request")

  person1 = {
    name: 'Tim',
    email: 'Tim@email.com',
    number: '(111) 111-1111',
    admin: true
  };
  person2 = {
    name: 'Joey',
    email: 'Joey@email.com',
    number: '(111) 111-1111',
    admin: true
  };
  person3 = {
    name: 'John',
    email: 'John@email.com',
    number: '(111) 111-1111',
    admin: true
  };

  var userList = [person1, person2, person3];
  res.json(userList);
});

app.listen(3000);
console.log("server running on port 3000");
