import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { MatDialogModule, MatDialogRef } from '@angular/material';
import { DialogService } from 'primeng/api';
import { ToastModule} from 'primeng/toast';
import { MultiSelectModule } from 'primeng/multiselect';
import { ToolbarModule } from 'primeng/toolbar';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ToolbarModule,
    HttpClientModule,
    AppRoutingModule,
    MultiSelectModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ConfirmDialogModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    InputTextModule,
    ToastModule,
    PasswordModule,
    DropdownModule,
    ButtonModule,
    TableModule
  ],
  providers: [
    DialogService, {provide: MatDialogRef, useValue: {}},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
