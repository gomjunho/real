
var OrientDB = require('orientjs');

var server = OrientDB({
     host:               'localhost',
     port:               2424,
     username:      'root',
     password:      'lljh0802@W'
});

var testdb = server.use('orientdb');

var sql =  "select * from testdb"

testdb.query(sql).then(function(result){
	console.log(result);
});

