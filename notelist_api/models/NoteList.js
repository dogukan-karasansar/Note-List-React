var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var notelistSchema = new Schema({
    title: String,
    description: String,
    createOn: Date
});

module.exports = mongoose.model('notelist', notelistSchema);
