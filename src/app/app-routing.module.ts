import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GamersDetailsComponent } from './gamers-details/gamers-details.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  // {path:'',component:DashboardComponent},
  { path:'', component:HeaderComponent},
  {path:'gamers-details', component:GamersDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
