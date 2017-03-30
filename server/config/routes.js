var users = require('./../controllers/users.js');
var posts = require('./../controllers/posts.js');

module.exports = function(app){
	console.log('routes imported');
	app.post('/users', users.create);
	app.post('/login', users.login);
	app.post('/post', posts.create);
	app.get('/all_posts', posts.index);
	app.post('/dashboard/post/:id', posts.find);

}
