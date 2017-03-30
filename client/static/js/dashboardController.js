uvaApp.controller('dashboardController', ['postFactory', '$location', '$scope', '$cookies', function(postFactory, $location, $scope, $cookies){

	var self = this;
	this.validationErrors;

  this.create_post = function(){
    self.new_post._creator = $cookies.get('useridCookie');
    console.log(self.new_post);
    postFactory.create_post(self.new_post, function(result){
        console.log(result);
        $scope.posts.push(result);
        $location.url('/dashboard')

    })
  };

  var post_index = function(){
    postFactory.post_index(function(returned_data){
      $scope.posts = returned_data;
    })
  }
post_index();

	var new_comment = function(){
		self.new_comment._creator = $cookies.get('useridCookie');
		console.log(self.new_comment);
		//add the rest here this is unfinished
	}


}])
