const express = require('express');
const parser = require('body-parser');
const server = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const cors = require('cors');

server.use(cors());
server.use(parser.json());
server.use(parser.urlencoded({extended: true}));

server.use(require('./controllers/index.js'));

MongoClient.connect('mongodb://localhost:27017', function(err, client) {

  if (err) {
    console.log(err);
    return;
  }
  const db = client.db("timelinedb");
	server.set("db", db);

  // server.get('/timeline', function(req, res){
  //   const timelineCollection = db.collection('timeline_women');
  //   timelineCollection.find().toArray(function(err, allTimeline){
  //     if(err){
  //       console.log(err);
  //       res.status(500);
  //       res.send();
  //     }
  //
  //     res.json(allTimeline);
  //   });
  // });

  console.log('Connected to database');
  // collection name timelinedb_women

  server.listen(process.env.PORT || 3001, function () {
  	console.log('App running on port ' + this.address().port);
  });
});
