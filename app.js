var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', function(req, res){
	res.send('test');
});
app.listen(3000, function(){
	console.log('Connecting 3000 port.....');
});
