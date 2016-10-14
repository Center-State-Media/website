var express = require('express');
var bodyParser = require('body-parser');
var helmet = require('helmet');
// var db = require('./database/config.js')
// var mailgun = require('mailgun-js')({apiKey: process.env.mailgunApiKey, domain: process.env.mailgunDomain});

var app = express();

// authInfo.user = process.env.user
// authInfo.mailgunApiKey = process.env.mailgunApiKey
// authInfo.mailgunDomain = process.env.mailgunDomain

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(helmet());

// Set our port
var port = process.env.PORT || 3000;

// Serve up our static files
app.use(express.static(__dirname+'/../client'));

app.get('/contactSubmit', function (req, res) {
  // Create the email mailgun will send
  var data = {
    from: 'Contact Request <me@samples.mailgun.org>',
    to: process.env.userToEmail,
    subject: 'New contact request from ' + req.query.contactName,
    text: 'Email me at ' + req.query.contactEmail + '\n' + 'Call me at ' + req.query.contactPhone + ' \n' + 'I am interested in: ' + req.query.contactDescription
  };

  mailgun.messages().send(data, function (error, body) {
    if (error) {
      res.end('Message Error')
    } else {
      res.end('Message Sent');
    }
  });
  res.end('Message Sent');
})


// Start the server and the database
// db.sync().then(function () {
  // console.log('DB synced!');
  app.listen(port);
  console.log('Server started and listening on ' + port);
// })

module.exports = app;
