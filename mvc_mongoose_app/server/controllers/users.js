var mongoose = require('mongoose')
var User = mongoose.model('User'); 

module.exports = {
	index: function(req, res) {
		User.find({}, function(err, users) {
			if (err){
				res.json(err)
				return;
			}
			res.render("index",{title: 'App' , users: users});
		});
	},
	create: function(req, res) {
		var user = new User({name: req.body.name, age: req.body.age});
		user.save(function(err, users) {
			if (err){
				console.log('something went wrong');
				res.json(err)
				return;
			} 
			res.redirect('/')
		})
	}
}