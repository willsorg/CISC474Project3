import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { propertyModule } from './services/property.module';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostListingComponent } from './post-listing/post-listing.component';
import { ViewListingsComponent } from './view-listings/view-listings.component';
import { SearchListingsComponent } from './search-listings/search-listings.component';
import { IndividualListingComponent } from './individual-listing/individual-listing.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'postListing', component: PostListingComponent},
  {path: 'viewListings', component: ViewListingsComponent},
  {path: 'searchListings', component: SearchListingsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostListingComponent,
    ViewListingsComponent,
    SearchListingsComponent,
    IndividualListingComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), NgbModule.forRoot(), propertyModule, HttpClientModule, FormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
