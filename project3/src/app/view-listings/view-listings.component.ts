import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { property } from '../services/property.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-listings',
  templateUrl: './view-listings.component.html',
  styleUrls: ['./view-listings.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ViewListingsComponent implements OnInit {

	apiSvc: any;
	properties : any;

    constructor(@Inject(property) _apiSvc: property, private http: HttpClient  ) {
  		this.apiSvc = _apiSvc;
    }

  ngOnInit() {
  	this.http.get('http://ec2-34-200-119-236.compute-1.amazonaws.com:3000/api/all').subscribe(data => {
      console.log(data);
      this.properties = data;
      //this.properties = [{"id":"1","address":"14 Annabelle St","rent":"500","bedrooms":"4","bathrooms":"1","tenants":"4"},
      //                    {"id":"2","address":"12 Annabelle St","rent":"500","bedrooms":"4","bathrooms":"1","tenants":"4"}]

    });
  }
  
}
