uvaApp.controller('usersController', ['userFactory', '$cookies', '$location', function(userFactory, $cookies, $location){

	var self = this;
	this.validationErrors;
	var signedin = $cookies.get('useridCookie');
	this.username = $cookies.get('usernameCookie');
	this.users = [];

	console.log("SIGNED IN: ", signedin)
	if(signedin) {
		console.log("User is logged in");
		$location.url('/dashboard');
	}
	else{
		$location.url('/login');
	}

	this.logged_in = function() {
		return $cookies.get('userIdCookie') != null
	}

	this.register = function(){
		// console.log(self.regUser);
		userFactory.register(self.regUser, function(data){
			$cookies.put('usernameCookie', data.username);
			$cookies.put('useridCookie', data._id);
			var cookie_guy = $cookies.put('usernameCookie', data._id);
			console.log(cookie_guy);
			$location.url('/dashboard');
		}, function(error){

			self.validationErrors = error.data.errors
			// console.log(this.validationErrors);
		})
	}
	this.login = function(){
		console.log(self.logUser);
		userFactory.login(self.logUser, function(response){
			console.log("first callback");
			console.log(response);
			$cookies.put('useridCookie', response.data._id);
			$cookies.put('usernameCookie', response.data.username);

			console.log(response.data);
			$location.url('/dashboard');

		}, function(error){
			console.log("second callback");
			console.log(error);
			self.validationErrors = error.data.data.errors;
		})
	}

	this.logout = function() {
		$cookies.remove('useridCookie')
		$location.url('/login')
	}




}])
