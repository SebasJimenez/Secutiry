import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreenAcepComponent } from './screen-acep/screen-acep.component';

const routes: Routes = [
  {
    path: '',
    component: ScreenAcepComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AceptarRoutingModule { }
