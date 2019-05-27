import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ScreenCreateComponent } from './screen-create/screen-create.component';

const routes: Routes = [
  {
    path: '',
    component: ScreenCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CreateRoutingModule { }
