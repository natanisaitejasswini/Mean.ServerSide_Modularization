var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 4},
	message: {type: String, required: true, minlength: 4, maxlength: 255},
	_comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
	},{timestamps:true})
mongoose.model('Message', MessageSchema);

MessageSchema.path('name').required(true,'Name cannot be Blank');
MessageSchema.path('message').required(true,'Message cannot be Blank');