import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatIconModule} from '@angular/material/icon';
// import {MatButtonModule} from '@angular/material/button';
// import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatAutocompleteModule} from '@angular/material/autocomplete';
// import { MatFormFieldModule } from '@angular/material';
// import { MatInputModule } from '@angular/material/input';
import { GamersDetailsComponent } from './gamers-details/gamers-details.component';
import { HeaderComponent } from './header/header.component';
// import {MatChipsModule} from '@angular/material/chips';
import {MaterialExampleModule} from '../material.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GamersDetailsComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
