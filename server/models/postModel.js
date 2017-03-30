var mongoose = require("mongoose");

var PostSchema = new mongoose.Schema({
  _creator: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
	    },

  title: {
    type: String,
    required: [true, "You're a Wahoo, but you don't know how to write?"],
    maxlength: [140, "Must be shorter than 140 characters"],
    minlength: [4, "Must be longer than 4 characters"]
  },

  visible: {
    type: String,
    default: "1"
  },
  comments:[{
    _creator:{
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    },
    comment: {type : String, maxlength: [120, "Must be shorter than 120 characters"]}
  }],

  votes:[{
    _creator:{
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    },
    vote_type:{type: String}
  }],

  vote_count:{
    type: Number,
    default: 0
  }
},
  {timestamps: true}

);

mongoose.model('Post', PostSchema);
//functions

// var validateNumber = function(vote_type){
//   if(vote_type >= -1 || vote_type <= 1 ){
//     return vote_type;
//   }
//   else{
//     res.json({error: "The vote did not go through"});
//   }
//
// }
