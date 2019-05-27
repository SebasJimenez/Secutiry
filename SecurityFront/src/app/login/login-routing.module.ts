import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreenLogComponent } from './screen-log/screen-log.component';

const routes: Routes = [
  {
    path: '',
    component: ScreenLogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
