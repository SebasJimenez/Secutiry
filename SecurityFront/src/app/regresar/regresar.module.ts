import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegresarRoutingModule } from './regresar-routing.module';
import { ScreenRegComponent } from './screen-reg/screen-reg.component';

@NgModule({
  declarations: [
    ScreenRegComponent
  ],
  imports: [
    CommonModule,
    RegresarRoutingModule
  ]
})
export class RegresarModule { }
