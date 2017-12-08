import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { property } from '../services/property.service';
import { Property } from '../property';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-individual-listing',
  templateUrl: './individual-listing.component.html',
  styleUrls: ['./individual-listing.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IndividualListingComponent implements OnInit {

	apiSvc: any;
	properties : any;
  property: Property;
  apiKey : string = "AIzaSyAw_H4lE8TiLAl8sNhvbtfaQ5LlODwYAxc";
  rent : string = "Not Set";
  bedrooms: string = "Not Set";
  bathrooms: string = "Not Set";
  tenants: string = "Not Set";
  

  link: string = "https://maps.googleapis.com/maps/api/streetview?size=450x300&location=" + this.route.snapshot.params['id'] + "&key=" + this.apiKey;


    constructor(@Inject(property) _apiSvc: property, private route:ActivatedRoute, private http: HttpClient) {
  		this.apiSvc = _apiSvc;
    }

  ngOnInit() {
  	
    let id = this.route.snapshot.params['id'];
    console.log(id);
    
    var data = {"address": id};
    console.log("search for call");
    this.http.post('http://localhost:3000/api/propertyByAddress', data)
    .subscribe(

      res => {
        console.log("Results: ");
        console.log(res);
        this.properties = res;
        console.log(this.properties);
        
        //console.log(property);
        
        if(this.properties.rent == 0){
          this.rent = "Contact Owner for Details";
        }
        else{
          this.rent = "$"+this.properties.rent;
        }
        if(this.properties.bathrooms == 0){
          this.bathrooms = "Info Not Available/ Multiple Options Available";
    
        }
        else{
          this.bathrooms = ""+this.properties.bathrooms;
        }
        if(this.properties.bedrooms == 0){
          this.bedrooms = "Info Not Available/ Multiple Options Available";
    
        }
        else{
          this.bedrooms = ""+this.properties.bedrooms;
        }
        if(this.properties.tenants == 0){
          this.tenants= "Info Not Available/ Multiple Options Available";
    
        }
        else{
          this.tenants = ""+this.properties.tenants;
        }
        
      },
      err => {
        console.log("Error occured");
        console.log(err);
      }
    );

    this.link = "https://maps.googleapis.com/maps/api/streetview?size=450x300&location=" + this.properties.address + ", Newark DE&key=" + this.apiKey;

    console.log(this.link);

    
  }

  findAddressURL() {
    let url = "https://maps.googleapis.com/maps/api/streetview?size=450x300&location=" + this.properties.address + ", Newark DE&key=" + this.apiKey;
    return url;
  }

  fixMissingInfo(){
    
  }

}
