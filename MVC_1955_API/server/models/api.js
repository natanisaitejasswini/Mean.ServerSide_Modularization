var mongoose = require('mongoose');

var YearSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 2},
	},{timestamps:true})
mongoose.model('Year', YearSchema); 
