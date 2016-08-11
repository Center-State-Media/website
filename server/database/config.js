var mongoose = require('mongoose');

mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/nameThatAnimal';

mongoose.connect(mongoURI);
var db=mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  console.log('Time for some Animals!');
});

module.exports = db;
