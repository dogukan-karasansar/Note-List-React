var express = require('express');
var router = express.Router();

var NoteList = require('../models/NoteList');

// Get Note List İşlemi
router.get('/', function (reg, res, next) {
  NoteList.find().then(
    (notelist) => {
      res.send({notelist});
    },
    (e) => {
      res.status(400).send(e);
    },
  );
});

// Post Note List İşlemi

router.post('/', (request, res) => {
  let notelist = new NoteList({
    title: request.body.title,
    description: request.body.description,
    createOn: new Date()
  });
  notelist.save().then(
    (doc) => {
      res.send(doc);
    },
    (e) => {
      res.status(400).send(e);
    },
  );
  console.log(request.body);
});

module.exports = router;
