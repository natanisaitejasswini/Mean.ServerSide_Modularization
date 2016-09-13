var yearsController = require('../controllers/api.js')

module.exports = function(app){
  // GET '/' will serve up the full collection of people born in 1955
  app.get('/',yearsController.index);

  // GET '/new/:name/' will add a name into the database. can be used for blank spaces, so adding Steve Jobs to our database, you'd type in the URL 'localhost:8000/new/Steve Jobs'
  app.get('/new/:name', yearsController.create);

  // GET '/:name' will bring up the document of that particular person.
  app.get('/:name', yearsController.show);

  // GET '/remove/:name/' will delete a name from the database.
  app.get('/remove/:name', yearsController.destroy);

}