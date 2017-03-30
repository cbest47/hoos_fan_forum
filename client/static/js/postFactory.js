uvaApp.factory('postFactory', function($http){
	console.log("dashboard factory loaded up");

	var factory = {};

  factory.create_post = function(new_post, callback){
    console.log(new_post);
    $http.post('/post', new_post).then(function(returned_data){
      console.log("after http request", returned_data.data);
      callback(returned_data.data);
    }).catch(function(error){
      console.log(err);
    });
  };

  factory.post_index = function(callback){
    $http.get('/all_posts').then(function(returned_data){
      posts = returned_data.data;
			console.log("post data", posts);
      callback(posts);
    })
  }

	factory.find_post = function(id, callback){
		console.log("post id made it", id);
		$http.post(`/dashboard/post/${id}`).then(function(response){
			console.log("found post:", response.data);
			post = response.data;
			callback(post);
		})
	}

	factory.create_comment = function(new_comment, callback){
    console.log(new_comment);
    $http.post('/posts/new_comment', new_comment).then(function(returned_data){
      console.log("after http request", returned_data.data);
      callback(returned_data.data);
    }).catch(function(error){
      console.log(err);
    });
  };





	return factory;
})
