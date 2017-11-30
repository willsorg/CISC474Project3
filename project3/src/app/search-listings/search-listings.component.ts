import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { property } from '../services/property.service';

@Component({
  selector: 'app-search-listings',
  templateUrl: './search-listings.component.html',
  styleUrls: ['./search-listings.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchListingsComponent implements OnInit {

  types = ['Apartment', 'House',
  'Townhouse'];
	apiSvc: any;
	properties : any;

    constructor(@Inject(property) _apiSvc: property) {
  		this.apiSvc = _apiSvc;
    }

  ngOnInit() {
  	this.properties = this.apiSvc.getListings();
  	console.log(this.properties);
  }

}
