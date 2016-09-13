var mongoose = require('mongoose');

var PetSchema = new mongoose.Schema({
	name: {type: String},
	description: {type: String},
	age: {type: Number},
	},{timestamps:true})
mongoose.model('Pet', PetSchema); 
