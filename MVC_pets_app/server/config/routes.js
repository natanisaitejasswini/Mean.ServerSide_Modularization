var petsController = require('../controllers/pets.js')

module.exports = function(app){
	app.get('/', petsController.index);
	app.get('/new', petsController.new_pet);
	app.post('/', petsController.new_pet_add);
	app.get('/:id/edit', petsController.edit_page);
	app.get('/:id', petsController.show);
	app.post('/:id', petsController.edit_post);
	app.post('/:id/destroy', petsController.remove);
}
