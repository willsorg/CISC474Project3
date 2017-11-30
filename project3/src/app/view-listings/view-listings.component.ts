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
  	this.http.get('http://localhost:3000/api/all').subscribe(data => {
      console.log(data);
      this.properties = data;
    });
  }
  
}
