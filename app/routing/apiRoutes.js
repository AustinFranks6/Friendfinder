var path = require('path');

var friends = require('../data/friends.js');

// Export API routes
module.exports = function(app) {
	// friend path
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	app.post('/api/friends', function(req, res) {
		var userInput = req.body;

		var userResponses = userInput.scores;
		var matchName = '';
		var matchImg = '';
		var totalDifference = 10000;


};