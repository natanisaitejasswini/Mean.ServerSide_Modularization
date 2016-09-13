var mongoose = require('mongoose');
var Year = mongoose.model('Year'); 

module.exports = {
	index: function(req, res) { 
		Year.find({}, function(err, results) {
			if (err){
				res.json(err)
			}
			else{
				res.json(results)
			}
		})
	},

	create: function(req,res){
		var year = new Year({name: req.params.name});
		year.save(function(err,results) {
		    if(err){
				 res.json(err)
		    }
		    else{
		    	res.json(results)
		    }
		})
	},

	destroy: function(req, res) { 
		Year.remove({name: req.params.name}, function(err, results) {
			if (err){
				 res.json(err)
			}
			else{
				res.json(results)
			}
		})
	},
	
	show: function(req, res) { 
		Year.findOne({_id: req.params.name}, function(err, results) {
				if (err){
					res.json(err)
				}
				else{
					res.json(results)	
				}
		})
	},	
}

 	
