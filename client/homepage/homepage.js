
function populateHistory(history){
    
    document.getElementById("logHistory").innerHTML = "";
    
    for(var i = 0; i < history.length; i++){
        
        document.getElementById("logHistory").innerHTML += "history.html";
    }
    
    
}
function startLogOut(){
    document.cookie ="email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie ="history=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "../../"
    
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function changePassword(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var newPassword = document.getElementById("newPassword").value;
    var confrim = document.getElementById("confirm").value;
    
    
    if(!email || !password || !newPassword || !confirm){
        alert("All Fields must be filled");
    }
    else{
        if(newPassword == confrim){
            var http = new XMLHttpRequest();
                    var url = "http://user-authentication-willsorg.c9users.io:8080/api/change";
                    var params = JSON.stringify({"password":password, "email" : email, "newPassword": newPassword, "confirm": confirm});
                    //console.log(params);
                    http.open("POST", url, true);
    
                    //Send the proper header information along with the request
                    http.setRequestHeader("Content-type", "application/json");//, "Cookie", "goodCookie");
    
                    http.onreadystatechange = function() {//Call a function when the state changes.
                        if(http.readyState == 4 && http.status == 200) {
                            //a redirect will eventually be here
                            alert("password successfully changed");
                            
                        
                            
                            //
                        }
                        else if(http.status == 400){
                            alert("Invalid Password or mismatched new passwords");
                        }
                        else if(http.status > 200){
                            alert("Something terrible has happened.  Press '#' for more information");
                        }
                    }
                    http.send(params);
        }
        else{
            alert("New Password and Confim Password Fields must match");
        }
    }
}

function buildPage(){
    //console.log("build page launched")
    var email = getCookie("email");
    var history = getCookie("history");
    
    //console.log("Cookie Email = "  + email);
    ///console.log("Cookie History  = " + history);
    
    
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
                            
                            //console.log("api call complete");
                            //console.log(http.response);
                            document.getElementById("logHistory").innerHTML = (JSON.parse(http.response).history);
                            document.getElementById("userName").innerHTML = email;
                            
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