import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-listing',
  templateUrl: './post-listing.component.html',
  styleUrls: ['./post-listing.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostListingComponent implements OnInit {

  types = ['Apartment', 'House',
  'Townhouse'];
  public address: string;
  public rent: number;
  public bedrooms: number;
  public bathrooms: number;
  public tenants: number;
  public type: string;
  public owner: string;

  constructor(private http: HttpClient   
  ) { 
    
  }
    
  ngOnInit() {
    
  
    
  }
  postData(){

    console.log("PostData Has Been Called");

    var data = {"address": this.address, "type": this.type, "rent": this.rent,
     "owner": this.owner, "bedroom":this.bedrooms, "bathroom": this.bathrooms, "tenants": this.tenants};
    const req = this.http.post('http://localhost:3000/api/postProperty', data)
      .subscribe(
        res => {
          console.log("write successful");
          console.log(res);
        },
        err => {
          console.log("Error occured");
          console.log(err);
        }
      );
  }

}
