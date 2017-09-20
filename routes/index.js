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

router.get('/googlee9601d81b4c3391a', function(req, res, next) {
	try {	
		res.render('googlee9601d81b4c3391a');
	} catch (exception) {
		console.log(exception);
	}
});

module.exports = router;
