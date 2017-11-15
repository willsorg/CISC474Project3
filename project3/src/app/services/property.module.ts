import { Http, HttpModule } from '@angular/http';
import { property } from './property.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export function propertyFactory(http: Http){
  return new property(http, 'http://ws.audioscrobbler.com/2.0');
}

@NgModule({
  imports: [CommonModule, HttpModule],
  providers: [{provide: property, useFactory: propertyFactory, deps: [Http]}],
  declarations: []
})
export class propertyModule { }