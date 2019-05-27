import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AceptarRoutingModule } from './aceptar-routing.module';
import { FormsModule } from '@angular/forms';
import { ScreenAcepComponent } from './screen-acep/screen-acep.component';
import {SidebarModule} from 'primeng/sidebar';

@NgModule({
  declarations: [
    ScreenAcepComponent
  ],
  imports: [
    CommonModule,
    AceptarRoutingModule,
    FormsModule,
    SidebarModule
  ],
  providers: [
   ]
})
export class AceptarModule { }
