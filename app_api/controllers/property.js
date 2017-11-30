
var mongoose = require('mongoose');
var assert = require('assert');
var Property = mongoose.model('Property', mongoose.propertySchema, 'properties');

var sendJSONresponse = function(res, status, content){
  res.status(status);
  res.json(content);
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


module.exports.propertyByType = function(req, res){

  if (req.body.type != null) { // Check if session exists
    
    // lookup the user in the DB by pulling their email from the session
    Property.find({ type: req.body.type }, function (err, property) {
      if(err){
        // all is the redirect if there is a bad search, it will
        // just return all properties in the database
        res.status(200);
        res.redirect('/all');
      }
      if (!property) {
        // all is the redirect if there is a bad search, it will
        // just return all properties in the database
        res.status(200);
        res.redirect('/all');
      }
     
      else {
        // As of now, the only thing that is being passed
        // is the array of objects that were found
        // cool beans

        res.status(200);
        
        res.json({
          
          "properties" : property
        });
      
      }
    });
  }
  else {
    
    res.status(200);
    res.redirect('/all');
  }
}
// this is a general result
module.exports.allProperties = function(req, res){
  console.log("recieved");
  //mongoose get all docs. I think here answers your question directly
  Property.find(function (err, results) {
    console.log(results);
    res.json(results);
    res.status(200);
    
  });
};