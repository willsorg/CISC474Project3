
//var mongoose = require('mongoose');





//var user = mongoose.model('User', userSchema);

//mongoose.connect('mongodb://localhost/users');
function forwardUser(){
    window.location.href = "../login/login.html";
}

function startRegister(){
    var e = document.getElementById('email').value;
    var n =  document.getElementById('name').value;
    var p = document.getElementById('pass').value;
    
    createUser(e, n, p);
}
function createUser(email,name, password){
    //console.log("create users launched" + email + name + password);
    if(email != null && name != null && password != null){
        if(email.includes("@")){
            if(password.length > 7){
                //console.log("request Prepared");
                
                var http = new XMLHttpRequest();
                var url = "http://user-authentication-willsorg.c9users.io:8080/api/register";
                var params = JSON.stringify({"email":email, "name":name, "password":password});
                http.open("POST", url, true);

                //Send the proper header information along with the request
                http.setRequestHeader("Content-type", "application/json");

                http.onreadystatechange = function() {//Call a function when the state changes.
                    if(http.readyState == 4 && http.status == 200) {
                        //a redirect will eventually be here
                        forwardUser();
                        alert("Succesfully Registered User");
                    }
                }
                http.send(params);
                }
                
            }
            
       
       else{
          alert( "Email must be in format ______@___" ) ;
       }
    
    }
    else{
        alert( "Fields Cannot Be Left Blank" );
    }
}




