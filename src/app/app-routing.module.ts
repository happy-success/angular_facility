import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacilityComponent } from './mainpage/facility/facility.component';
import {  NotFoundComponent } from './mainpage/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: FacilityComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
