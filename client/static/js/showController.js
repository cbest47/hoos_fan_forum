uvaApp.controller('showController', ['postFactory', '$location', '$scope', '$routeParams', '$cookies', function(postFactory, $location, $scope, $routeParams, $cookies){

	var self = this;
	this.validationErrors;

  this.find_post = function(){
    console.log("first route sent:", $routeParams.id )
    postFactory.find_post($routeParams.id, function(post){
      $scope.post = post[0];
    })
  }

	this.create_comment = function(){
		self.new_comment.post_id = $routeParams.id;
		console.log(self.new_comment.post_id);
		console.log("new comment", self.new_comment);

		postFactory.create_comment(self.new_comment, function(comment){
			//more stuff
		})

	}


}])
