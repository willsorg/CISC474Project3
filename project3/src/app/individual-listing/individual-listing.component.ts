import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { property } from '../services/property.service';
import { Property } from '../property';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-individual-listing',
  templateUrl: './individual-listing.component.html',
  styleUrls: ['./individual-listing.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IndividualListingComponent implements OnInit {

	apiSvc: any;
	properties : any;
  property: Property = new Property(1,"14 Annabelle St",4,500,1,4,"House");


    constructor(@Inject(property) _apiSvc: property, private route:ActivatedRoute) {
  		this.apiSvc = _apiSvc;
    }

  ngOnInit() {
  	this.properties = this.apiSvc.getListings();
  	console.log(this.properties);
    let id = this.route.snapshot.params['id'];
    console.log(id);
  }

}
