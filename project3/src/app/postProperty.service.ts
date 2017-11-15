import {Injectable} from '@angular/core';

@Injectable()

export class PostPropertyService {
    submitPost(address, rent, bedrooms, bathrooms, owner, type ) {
        console.log('Submit Post Called');
      if (address != null && rent != null && bedrooms != null && bathrooms != null && owner != null && type != null) {
        // console.log('request Prepared');
            var http = new XMLHttpRequest();
            var url = 'http://localhost:3000/api/postProperty';
            var params = JSON.stringify({'address':document.getElementById('address').value, 'type':type, 'rent':document.getElementById('rent').value,
                     "owner":document.getElementById("owner").value, "bedroom":document.getElementById("bedrooms").value, "bathroom":document.getElementById("bathrooms").value, "tenant":document.getElementById("bathrooms").value});
                    http.open("POST", url, true);
  
                    //Send the proper header information along with the request
                    http.setRequestHeader("Content-type", "application/json");
  
                    http.onreadystatechange = function() {//Call a function when the state changes.
                        if(http.readyState == 4 && http.status == 200) {
                            //a redirect will eventually be here
                            
                            alert("Succesfully Registered User");
                            window.location.href= "http://localhost:4200/home";
                        }
                    }
                    http.send(params);
                    }
                    
                    
          
          else{
              alert( "Post Failed" ) ;
          }
        }
}