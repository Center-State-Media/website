var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');
var Animal = require('../Database/Models/animals.js');

var app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Set our port
var port = process.env.PORT || 8080;

// Serve up our static files (it has to serve up a directory)
app.use(express.static(__dirname+'/../Client'));

// Could serve up a different html with something like
// app.get('/sites', function(req,res) {
//   res.sendFile // send your sites.html
// })

// app.use(express.static('../Client'));

// Get our router set up
var router = express.Router();

// Basic router to run first
router.use(function(req, res, next) {
    console.log('A request has been sent.');
    next(); // sends us to the next route
});

router.route('/animals')
  .get(function(req, res) {
    Animal.find({}).exec(function(err, animals) {
      if (err) {
        console.log('Failed to round up the animals');
      } else {
        res.json(animals);
      }
    });
  })

  .post(function(req, res) {
    // Assuming that we don't
    var animal = new Animal({
      name: req.body.name,
      type: req.body.type,
      diet: req.body.diet,
      lifespan: req.body.lifespan,
      size: req.body.size,
      weight: req.body.weight,
      image: req.body.image,
    });

    animal.save(function(err) {
      if (err) {
        res.send(err);
      }

      res.json({message: 'Animal created!'});
    });
  });

// All of our routes will be prefixed with /api
app.use('/api', router);


// Start the server
app.listen(port);
console.log('Server started and listening on ' + port);


// Serve up the static file
// Will need to make this path relative with __dirname + '/client'
// app.use(express.static('../Client'));

module.exports = app;
