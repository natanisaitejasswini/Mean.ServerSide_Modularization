var mongoose = require('mongoose');
var Pet = mongoose.model('Pet'); 

module.exports = {
	index: function(req, res) { 
		Pet.find({}, function(err, pets) {
			if (err)
				return res.json(err)
			res.render("index", {title: 'pet App ', pets: pets});
		})
	},

 	new_pet: function(req, res) { 
			res.render("new");
	},

	new_pet_add: function(req,res){
		var pet = new Pet({name: req.body.name, description: req.body.description, age: req.body.age});
		pet.save(function(err) {
		    if(err)
		    	return res.json(err)
		    res.redirect('/');
		})
	},

 	edit_page: function(req, res) { 
		Pet.findOne({_id:req.params.id}, function(err,pets){
		 	if (err)
					return res.json(err)
			res.render("edit", {title: 'Pet App', pets:pets});
		})
	},

	show: function(req, res) { 
		Pet.findOne({_id: req.params.id}, function(err, pets) {
				if (err)
					return res.json(err)
				res.render("show", {title: 'Pet Form', pets: pets});
		})
	},	

	edit_post: function(req,res){
		Pet.update({_id:req.params.id}, { name: req.body.name, description: req.body.description, age: req.body.age}, function(err){
			if(err)
				return res.json(err)
			res.redirect('/')
		})
	},


 	remove: function(req, res) { 
		Pet.remove({_id:req.params.id}, function(err) {
			if (err)
				return res.json(err)
			res.redirect('/')
		})
	}
}
