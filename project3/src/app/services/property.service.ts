import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class property {
  baseUri: string;
  limit = 100;
   private headers = new Headers({
    'Content-Type': 'application/json'
  });
  constructor(private http: Http, baseAPIUri: string) {
    console.log("Anything?");
    this.baseUri = baseAPIUri;
  }


  getListings = () => {
  	return [{'Address':'14 Annabelle','Tenants':'4','Rent':'$750','Bathrooms':'1','Bedrooms':'4','Type':'House'},
            {'Address':'12 Annabelle','Tenants':'4','Rent':'$750','Bathrooms':'1','Bedrooms':'4','Type':'House'},
            {'Address':'Madeline Crossing','Tenants':'6','Rent':'$500','Bathrooms':'3','Bedrooms':'4','Type':'Apartment'}];
  }




}