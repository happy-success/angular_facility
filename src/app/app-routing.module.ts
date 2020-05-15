import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DescriptionComponent } from './mainpage/description/description.component';
import {  NotFoundComponent } from './mainpage/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: DescriptionComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
