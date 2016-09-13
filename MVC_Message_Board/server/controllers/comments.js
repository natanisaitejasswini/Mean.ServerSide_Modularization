var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');
var Message = mongoose.model('Message'); 

module.exports = {
	create: function(req,res){
		Message.findOne({_id: req.params.message_id}, function(err,messages){
			if(err){
				res.json(err)
			}
			else{
				var new_comment = new Comment({name: req.body.name, comment: req.body.comment, 
					_message: req.params.message_id});
				new_comment._message = req.params.message_id;
				new_comment.save(function(err){
					console.log(err, 'validations')
					var errors_comments =[]
					if(err){
						res.render('index', {title: 'you have errors!', errors: new_comment.errors})
						console.log('Something went wrong in posting a comment')
					}
					else{
						messages._comments.push(new_comment);
						messages.save(function(err){
							if(err) { 
									console.log('Error during message saving with comments'); 
									} 
	                       	else { 
	                       		console.log('Messages are saved with comments')
	                       		res.redirect('/'); 
	                       	}
						})
					}
				})
			}
		})
	}
}
