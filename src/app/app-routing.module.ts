import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'service', component:HomeComponent},
  {path:'about', component:HomeComponent},
  {path:'company', component:HomeComponent},
  {path:'team', component:HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
