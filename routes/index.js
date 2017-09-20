var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

router.get('/', function(req, res, next) {
	try {	
		res.render('HelloAnalytics');
	} catch (exception) {
		console.log(exception);
	}
});

module.exports = router;
