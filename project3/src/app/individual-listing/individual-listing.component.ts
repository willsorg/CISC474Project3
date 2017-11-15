import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { property } from '../services/property.service';

@Component({
  selector: 'app-individual-listing',
  templateUrl: './individual-listing.component.html',
  styleUrls: ['./individual-listing.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IndividualListingComponent implements OnInit {

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
