function gitHub(){
    document.cookie ="email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie ="history=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    
    document.cookie ='email=GitHub User; path=/';
    document.cookie = 'history =Login History currently not supported for GitHub Guests; path=/';
    window.location.href = "https://github.com/login/oauth/authorize?client_id=f4276fe3520d4c32b422";
                
}