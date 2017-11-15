import { Component, Inject } from '@angular/core';
//import { PostPropertyService } from './postProperty.service';
import { property } from './services/property.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  apiSvc : any;
  properties : any;

  constructor(@Inject(property) _apiSvc: property) {
  		this.apiSvc = _apiSvc;
    }

  ngOnInit(){
    console.log(this.apiSvc.getListings());
    this.properties = this.apiSvc.getListings();
  }
}
