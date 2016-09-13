var messagesController = require('../controllers/messages.js')
var commentsController = require('../controllers/comments.js')

module.exports = function(app){
	app.get('/', messagesController.index);
	app.post('/create_message', messagesController.create);
	app.post('/create_comment/:message_id', commentsController.create);
}


