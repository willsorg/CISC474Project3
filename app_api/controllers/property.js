
var mongoose = require('mongoose');
var assert = require('assert');
var Property = mongoose.model('Property', mongoose.propertySchema, 'properties');

var sendJSONresponse = function(res, status, content){
  res.status(status);
  res.json(content);
};

module.exports.postScraped = function(req, res){
  console.log("Function Called");
  //console.log(req.body);
  //console.log(req.body.length);
  
  for(var i = 0; i < req.body.length; i++){
    console.log("Iteration" + i);
    var property = new Property();
    parsedData = req.body[i];
    //console.log(parsedData);
    
    console.log(parsedData.address + " returned " + parsedData.address.localeCompare("Address not yet found") );
  if(parsedData.address.localeCompare("Address not yet found") != 0 ){
    property.address = parsedData.address;
    property.type = "N/A";
    if(parsedData.price.charAt(0) != '$'){
      property.rent = 0;
    }
    else{
  

    property.rent = parseInt(parsedData.price.slice(1)), 10;
    }
    property.owner = parsedData.landlord;
    if(isNaN(parseInt(parsedData.bedrooms, 10))){
      property.bedrooms = 0;
    }
    else{
      property.bedrooms = parseInt(parsedData.bedrooms, 10);
    }
    if(isNaN(parseInt(parsedData.bathrooms, 10))){
      property.bathrooms = 0;
      }
    else{
      property.bathrooms = parseInt(parsedData.bathrooms, 10);
    }
    if(isNaN(parseInt(parsedData.tenants, 10))){
       property.tenants = 0;
    }
    else{
      property.tenants = parseInt(parsedData.tenants, 10);
    }
    
    property.contact = parsedData.contact;
    //property.
   
    
    
    property.save(function(err) {
      
      if (err) {
        console.log("Property Not written, error");
        console.log(err);
        
      }
      else{
      
      message = "User Saved Success";
      //console.log(message);
      }
      
    });
  }}
  res.status(200);
};

module.exports.postProperty = function(req, res) {
  
  var property = new Property();
  
  

  property.address = req.body.address;
  property.type = req.body.type;
  property.rent = req.body.rent;
  property.owner = req.body.owner;
  property.bedrooms = parseInt(req.body.bedroom, 10);
  property.bathrooms = parseInt(req.body.bathroom, 10);
  property.tenants = parseInt(req.body.tenants, 10);
  //property.
 
  
  
  property.save(function(err) {
    
    if (err) {
      console.log("Property Not written, error");
      console.log(err);
      
    }
    else{
    var token;
    message = "User Saved Success";
    res.status(200);
    res.json({
      "message" : message
    });
    }
    
  });
  
};


module.exports.propertyByAddress = function(req, res){
console.log(req.body.address);
  if (req.body.address != null) { // Check if session exists
    
    // lookup the user in the DB by pulling their email from the session
    var winner
    Property.find(function (err, results) {
      for(i = 0; i < results.length; i++){
        if(results[i].address == req.body.address){
          winner = results[i];
        }
      }
      res.json(winner);
      res.status(200);
      
    });
      
      }
    }
// this is a general result
module.exports.allProperties = function(req, res){
  //console.log("recieved");
  //mongoose get all docs. I think here answers your question directly
  Property.find(function (err, results) {
    
    res.json(results);
    res.status(200);
    
  });
};