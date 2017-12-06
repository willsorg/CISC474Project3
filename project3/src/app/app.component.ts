import { Component, Inject } from '@angular/core';
//import { PostPropertyService } from './postProperty.service';
import { property } from './services/property.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  apiSvc : any;
  properties : any;
  isCollapsed:boolean;
  pixelWidth: any;

  constructor(@Inject(property) _apiSvc: property, private http: HttpClient) {
      this.apiSvc = _apiSvc;
    }
    


  ngOnInit(){
    console.log(this.apiSvc.getListings());
    this.properties = this.apiSvc.getListings();
  }

  onResize(event) {
    this.pixelWidth = event.target.innerWidth;
    if (this.pixelWidth < 760) {
      this.isCollapsed = true;
     }
  }
}


