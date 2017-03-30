var mongoose = require("mongoose");
var path = require('path');
var fs = require('fs');

//Colin, dont be dumb, remember to change the database when you create a new project!!!
mongoose.connect("mongodb://localhost/uva_fan_forum");

mongoose.Promise = global.Promise;

var models_path = path.join(__dirname, '/../models');
console.log(models_path);

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js')>0){
		require(models_path + '/' + file);
	}
})
