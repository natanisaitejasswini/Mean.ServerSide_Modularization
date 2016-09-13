var mongoose = require('mongoose');
var Message = mongoose.model('Message'); 

module.exports = {
	index: function(req, res) { 
		Message.find({}).populate('_comments').exec(function(err, messages) {
			console.log(messages)
			if (err){
						res.json(err)
						console.log(err)
						return;
					}
			res.render("index", {title: 'Messaging App', messages: messages});	
		});
	},

	create: function(req,res){
		console.log("POST DATA", req.body);
		var message = new Message({name: req.body.name, message: req.body.message});
		message.save(function(err) {
			var errors_messages =[]
		    if(err) {
		    	res.render('index', {title: 'you have errors!', errors: message.errors})
		    } 
		    else { 
		      console.log('successfully added a post!');
		      res.redirect('/');
		    }
		});
	}
}
