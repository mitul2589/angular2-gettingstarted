var express = require('express');
var app = express();
var path = require('path');
var mongo = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/admin';

app.use(express.static(__dirname));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/products', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/api/products', function (req, res) {
    var parr = [];
    MongoClient.connect(url, function(err, db) {
        if(err) {
            console.log("Error");
        } else {
            console.log("Connected...!!!!");
        }
        var cursor = db.collection('products').find();
    
        cursor.each(function (err, doc) {
            debugger;
            if (doc !== null) {
                parr.push(doc);
            }
            res.send(parr);
        });

       
    });
    
});

app.listen(3000);