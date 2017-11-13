import { Component } from '@angular/core';
import { PostPropertyService } from './postProperty.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PostPropertyService]
})
export class AppComponent {
  title = 'app';
  constructor(private _postPropertyService: PostPropertyService){
    
  }
  ngOnInit(){
    
  }
}
