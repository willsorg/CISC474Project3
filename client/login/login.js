function buildHomePage(listItems){
    //window.location.href = ("../homepage/homepage.html");
    var histArray = JSON.parse(listItems);
    //console.log(histArray);
    setTimeout(function(){
    //console.log("This was infact called");
    document.getElementById("logHistory").innerHTML = histArray;
}, 3000);
    
    
    
}


function forwardUser(history, email){
    //console.log("forward user called with " + email + " and " + history);
    //window.location.href = "../homepage/homepage.html";
    /*document.getElementById("logHistory").innerHTML = "";
    
    for(var i = 0; i < history.length; i++){
        
        document.getElementById("logHistory").innerHTML += "<li>" + history[i] + "</li>";
    }
    */
    
    var http = new XMLHttpRequest();
                var url = "http://user-authentication-willsorg.c9users.io:8080/api/profile";
                var params = JSON.stringify({"history":history, "email" : email});
                //console.log(params);
                http.open("POST", url, true);

                //Send the proper header information along with the request
                http.setRequestHeader("Content-type", "application/json");//, "Cookie", "goodCookie");

                http.onreadystatechange = function() {//Call a function when the state changes.
                    if(http.readyState == 4 && http.status == 200) {
                        //a redirect will eventually be here
                        
                        console.log("api call complete");
                        //forwardUser(JSON.parse(http.response).history);
                        buildHomePage(http.response);
                        //
                    }
                    else if(http.status == 400){
                        alert("Could not build user profile");
                    }
                    else if(http.status > 200){
                        alert("Something terrible has happened.  Press '#' for more information");
                    }
                }
                http.send(params);
}

function startLogin(){
    var e = document.getElementById('email').value;
    
    var p = document.getElementById('password').value;
    //console.log("email = " + e + "    password = " + p );
    loginUser(e,p);
    
}
function loginUser(email, password){
    //console.log("create users launched" + email +  password);
    if(email != null || password != null){
        if(email.includes("@")){
            if(password.length > 7){
                //console.log("request Prepared");
                
                var http = new XMLHttpRequest();
                var url = "http://user-authentication-willsorg.c9users.io:8080/api/login";
                var params = JSON.stringify({"email":email, "password":password});
                http.open("POST", url, true);

                //Send the proper header information along with the request
                http.setRequestHeader("Content-type", "application/json");//, "Cookie", "goodCookie");

                http.onreadystatechange = function() {//Call a function when the state changes.
                    if(http.readyState == 4 && http.status == 200) {
                        //a redirect will eventually be here
                        //console.log(http.response);
                        document.cookie ='email=' + email +'; path=/';
                        document.cookie = 'history =' + JSON.parse(http.response).history+ '; path=/';
                        //window.email = email;
                        //window.history = JSON.parse(http.response).history;
                        //console.log("cookie created");
                        //forwardUser(JSON.parse(http.response).history, email);
                        alert("Login Successful");
                        window.location.href = ("../homepage/homepage.html");
                        //
                    }
                    else if(http.status == 400){
                        alert("User not found with selected E-Mail, try another account");
                    }
                    else if(http.status > 200){
                        alert("Something terrible has happened.  Press '#' for more information");
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



