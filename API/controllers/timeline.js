const express = require('express');
const timelineRouter = express.Router();

timelineRouter.get("/", function(req, res){
  const db = req.server.get("db");

  const timeline = db.collection("timelinedb_women");

  timeline.find().toArray(function(err, timelineObjects){
    if(err) {
        console.log(err);
        res.status(500)
        res.send();
    }

    res.json(timelineObjects);
  });
});

module.exports = timelineRouter;
