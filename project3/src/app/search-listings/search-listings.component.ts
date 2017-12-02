import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { property } from '../services/property.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-listings',
  templateUrl: './search-listings.component.html',
  styleUrls: ['./search-listings.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchListingsComponent implements OnInit {

  types = ['Apartment', 'House',
  'Townhouse', 'N/A'];
	apiSvc: any;
  properties : any;
  filteredRent = [];
  filteredTenant = [];
  filteredBed = [];
  filteredType = [];


  


  
  public rent: number;
  public bedrooms: number;
  public type: string;
  public tenants: number;


    constructor(@Inject(property) _apiSvc: property, private http: HttpClient) {
  		this.apiSvc = _apiSvc;
    }

    

  ngOnInit() {
  	this.http.get('http://localhost:3000/api/all').subscribe(data => {
      console.log(data);
      this.properties = data;
      this.filteredType = this.properties;
    });
  }

  searchData(){
    this.filteredRent = [];
    this.filteredTenant = [];
    this.filteredBed = [];
    this.filteredType = [];
    // console.log(this.rent);
    // console.log(this.tenants);
    // console.log(this.bedrooms);
    // console.log(this.type);
    // console.log(this.properties);
    

    // All Fields are filled
    if(this.rent != null && this.rent > 0){
        for(var i = 0; i < this.properties.length; i++){
          if(this.properties[i].rent <= this.rent){
            this.filteredRent.push(this.properties[i]);
          }
        }
      }
    else { this.filteredRent = this.properties;}

    if(this.tenants != null && this.tenants > 0){

        for(var j = 0; j < this.filteredRent.length; j++){
          if(this.filteredRent[j].tenants == this.tenants){
            this.filteredTenant.push(this.filteredRent[j]);
          }
        }
      }
    else{ this.filteredTenant = this.filteredRent;}

    if(this.bedrooms != null && this.bedrooms > 0){
        for(var k = 0; k < this.filteredTenant.length; k++){
          if(this.filteredTenant[k].bedrooms == this.bedrooms){
            this.filteredBed.push(this.filteredTenant[k]);
          }
        }
      }
    else{ this.filteredBed = this.filteredTenant;}

    if(this.type != null && this.type != "N/A"){
        for(var m = 0; m < this.filteredBed.length; m++){
          if(this.filteredBed[m].type == this.type){
            this.filteredType.push(this.filteredBed[m]);
          }
        }
    }
    else{ this.filteredType = this.filteredBed;}

    console.log(this.filteredType);

    
  }

}
