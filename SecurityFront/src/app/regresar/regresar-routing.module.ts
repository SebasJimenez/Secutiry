import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreenRegComponent } from './screen-reg/screen-reg.component';

const routes: Routes = [
  {
    path: '',
    component: ScreenRegComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegresarRoutingModule { }
