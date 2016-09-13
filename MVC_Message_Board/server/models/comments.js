var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 4},
	comment: {type: String, required: true, minlength: 4, maxlength: 255},
	_message: [{type: mongoose.Schema.Types.ObjectId, ref: 'Message'}],
	},{timestamps:true})
mongoose.model('Comment', CommentSchema); 

CommentSchema.path('name').required(true,'Name cannot be Blank');
CommentSchema.path('comment').required(true,'Comment cannot be Blank');