import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'aceptar',
    loadChildren: './aceptar/aceptar.module#AceptarModule'
  },
  {
    path: 'regresar',
    loadChildren: './regresar/regresar.module#RegresarModule'
  },
  {
    path: 'consult',
    loadChildren: './consult/consult.module#ConsultModule'
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadChildren: './notfound/notfound.module#NotfoundModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
