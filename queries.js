/* Fill out these functions using Mongoose queries*/
//all hail the mongoose API
'use strict'

var fs = require('fs'),
    mongoose = require('mongoose'), 
    config = require('./config.js'),
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 

mongoose.openUri(config.db.uri);

var findLibraryWest = function() {
  Listing.find({name: "Library West"}, function(err, listing){if (error) throw error;
    console.log("Found Library West!!!");
    console.log(listing);
  });
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
};
var removeCable = function() {
  Listing.findOneAndRemove({code:"CABL"}, function(error,listing){if (error) throw error;
    console.log("Removed CABL")})
    console.log(listing);
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
};
var updatePhelpsLab = function() {
  Listing.findOneAndUpdate({name : "Phelps Laboratory"}, {address: 'Phelps Lab, Gainesville, FL 32603'}, function(error,listing){if (error) throw error;
    console.log("Updated the address of Phelps Lab!")
    console.log(listing);
    //Pulled the address form google? Not sure if it's actually right, but I feel like that shouldn't matter?
};
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */

var retrieveAllListings = function() {
  Listing.find({}, function(error, allListings){if (error) throw error;
    console.log("Here's all the listings: ");
    console.log(allListings);
  });
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
