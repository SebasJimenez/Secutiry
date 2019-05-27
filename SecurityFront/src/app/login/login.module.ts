import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from './data/data.component';
import { ScreenLogComponent } from './screen-log/screen-log.component';
import {  ButtonModule  } from 'primeng/button';
import {  PasswordModule  } from 'primeng/password';
import {  InputTextModule } from 'primeng/inputtext';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [
    DataComponent,
    ScreenLogComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    PasswordModule,
    TooltipModule,
    InputTextModule
  ]
})
export class LoginModule { }
