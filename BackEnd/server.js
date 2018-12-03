var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var mongoDB = 'mongodb://bg:db12345@ds211774.mlab.com:11774/bg';
//        mongodb://<dbuser>:<dbpassword>@ds211774.mlab.com:11774

mongoose.connect(mongoDB);

var Schema = mongoose.Schema;
var audiSchema = new Schema({
    model: String,
    colour: String,
    condition: String,
    mileage: String
})
var audiModel = mongoose.model('audi', audiSchema);

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
    });
    
app.post('/name', function(req, res){
    res.send("Hello you sent " +
    req.body.firstname + " " +
    req.body.lastname);
})

app.get('/', function (req, res) {
   res.send('Hello from Express');
})

app.post('/api/audi', function(req, res){
    console.log("audi successful");
    console.log(req.body.model);
    console.log(req.body.colour);
    console.log(req.body.condition);

    audiModel.create({
        model: req.body.model,
        colour: req.body.colour,
        condition: req.body.condition,
        mileage: req.body.mileage

    });
    res.send('Car added');


})

app.get('/api/audi', function(req, res){
    audiModel.find(function(err, data){
        res.json(data);
    });
})

app.get('/api/audi/:id', function(req, res){
    console.log("Read audi " +req.params.id);

    //audiModel.find({_id : req.params.id}, 
    audiModel.findById(req.params.id,
        function (err, data) {
            res.json(data);
        });
})

app.put('/api/audi/:id', function(req, res){
    console.log("Update audi" +req.params.id);
    console.log(req.body.model);
    console.log(req.body.colour);

    audiModel.findByIdAndUpdate(req.params.id, req.body, 
        function(err, data){
            res.send(data);
        })
})

app.delete('/api/audi/:id', function(req, res){
    console.log(req.params.id);

    audiModel.deleteOne({_id:req.params.id},
    function(err, data)
    {
        if(err)
            res.send(err);
        res.send(data);
    })
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})