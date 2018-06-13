const express = require('express')
const app = express()
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, POST","PUT");
    next();
  });
var dogs = [
    { id: 11, name: 'Rex', weight: 20, height: 60},
    { id: 12, name: 'Alex', weight: 25, height: 65 },
    { id: 13, name: 'Bimi', weight: 50, height: 90 },
    { id: 14, name: 'Chacha', weight: 45, height: 80 },
    { id: 15, name: 'Tandi', weight: 30, height: 60 },
    { id: 16, name: 'Komo', weight: 35, height: 70 },
    { id: 17, name: 'Rafi', weight: 23, height: 55 },
  ];

var nextId;

app.get('/', (req, res) => res.send(dogs))
app.post('/', (req, res) => {
    dogs.push({
        id: nextId,
        name: req.body.name,
        weight: req.body.weight,
        height: req.body.height
    });
    updateId();
})



function updateId() {
    this.nextId = Math.max.apply(null, this.dogs.map( dog => dog.id));
}

app.listen(3000, () => console.log('Example app listening on port 3000!'))