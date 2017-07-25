var express = require("express");
var app = express();
app.use(express.static("public"));

app.get("/",function(req,res){
	console.log(100);
});

app.listen(5001,function() {
	console.log('listening on 5001');
} );
