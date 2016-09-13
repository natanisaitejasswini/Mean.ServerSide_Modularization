var mongoose = require('mongoose');

// basic models
var UserSchema = new mongoose.Schema({
 name: {type: String},
 age: {type: Number}
},{timestamps:true})
mongoose.model('User', UserSchema); 
