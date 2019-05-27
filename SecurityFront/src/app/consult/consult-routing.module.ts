import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ScreenComponent } from './screen/screen.component';
import { TableRolComponent } from '../consult/table-rol/table-rol.component';
import { TableComponent } from '../consult/table/table.component';

const routes: Routes = [
  {
    path: '',
    component: ScreenComponent
  },
  {
    path: 'rol',
    component: TableRolComponent
  },
  {
    path: 'user',
    component: TableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ConsultRoutingModule { }
