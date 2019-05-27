import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound/notfound.component';
import { NotFoundRoutingModule } from './notfound-routing.module';

@NgModule({
  declarations: [NotfoundComponent],
  imports: [
    CommonModule,
    NotFoundRoutingModule
  ]
})
export class NotfoundModule { }
