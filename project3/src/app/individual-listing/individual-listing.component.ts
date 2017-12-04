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
  property: Property = new Property(1,"14 Annabelle St, Newark DE",4,500,1,4,"House");
  apiKey : string = "AIzaSyAw_H4lE8TiLAl8sNhvbtfaQ5LlODwYAxc"

  link: string = "https://maps.googleapis.com/maps/api/streetview?size=450x300&location=14 Annabelle St, Newark DE&key=AIzaSyAw_H4lE8TiLAl8sNhvbtfaQ5LlODwYAxc"


    constructor(@Inject(property) _apiSvc: property, private route:ActivatedRoute) {
  		this.apiSvc = _apiSvc;
    }

  ngOnInit() {
  	this.properties = this.apiSvc.getListings();
  	console.log(this.properties);
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.link = this.findAddressURL();
  }

  findAddressURL() {
    let url = "https://maps.googleapis.com/maps/api/streetview?size=450x300&location=" + this.property.address + "&key=" + this.apiKey;
    return url;
  }

}
