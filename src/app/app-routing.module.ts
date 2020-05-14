import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DescriptionComponent } from './mainpage/description/description.component';

const routes: Routes = [
  { path: '', component: DescriptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
