var express = require('express');
var socket = require('socket.io');
var app = express();
var http = require('http');
var server = app.listen(process.env.PORT || 3000, function() {console.log('Server is running on PORT 3000');});
const mongo=require('mongodb').MongoClient;
const client = socket(server);
var mongoose = require('mongoose');
//express
app.use(express.static('public'));

connections= [];
const uri="mongodb://dbTanuj:yUMo6JuNDw0rWe1f@tanuj0-shard-00-00-ks1k4.mongodb.net:27017,tanuj0-shard-00-01-ks1k4.mongodb.net:27017,tanuj0-shard-00-02-ks1k4.mongodb.net:27017/test?ssl=true&replicaSet=Tanuj0-shard-0&authSource=admin&retryWrites=true";


//mongodb connection

mongoose.connect(uri, function(err, db){
    if(err){
        throw err;
    }

    console.log('MongoDB connected...');

    // Connect to Socket.io
    client.on('connection', function(socket){
        let chat = db.collection('chats');

        
        // Get chats from mongo collection
        chat.find().limit(100).sort({_id:1}).toArray(function(err, res){
            if(err){
                throw err;
            }

            // Emit the messages
            socket.emit('output', res);
        });

        // Handle input events
        socket.on('chat', function(data){
            let handle = data.handle;
            let message = data.message;

            
                chat.insert({handle: handle, message: message}, function(){
                    client.emit('output', [data]);

                    
                });
            });

         socket.on('user', function(data){
            
            

                    client.emit('user', data);

                    
                });
            

        });
});