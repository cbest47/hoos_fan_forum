var mongoose = require('mongoose');
var Post = mongoose.model('Post');

module.exports = function(){
	console.log("users controller loaded up");
	return {
		create: function(req,res){
			console.log("server side 1",req.body);
			var newPost = new Post(req.body);
			newPost.save(function(err, data){
				if(err){
					console.log("*****GOT ERROR*****")
					console.log(err);
					res.status(422);
					res.json(err);
				}
				else{
					console.log(data);
					res.json(data);
				}
			})
		},
    index: function(req, res){
      Post.find({})
      .populate('_creator', '-password')
      .exec(function(err, result){
        if(err){
          res.json(err);
        }
        else{
          res.json(result);
        }
      });

    },

    find: function(req, res){
      Post.find({_id: req.params.id}, function(err, results){
        if(err){
          console.log("error retrieving post");
          res.json(err);
        }
        else{
          console.log("post results :", results)
          res.json(results)
        }
      })
    }


	}
}();
