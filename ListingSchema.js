/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema */
var listingSchema = new Schema({
	name: {type:String, required:true},
	code: {type:String, required:true},
	address:String,
	coordinates:{
		lattitude:Number,
		longitude:Number
	}, 
	created_at: Date,
	updated_at: Date
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
listingSchema.pre('save', function(next) {
  var today = new Date();

  if(!this.name || !this.code){
  	var error = new Error("Not all fields filled")
  }
  //mocha throwing an error, checking for valid fields

  if(!this.created_at)
  	this.created_at = today;
  this.updated_at = today;
  next(error);
});

/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
