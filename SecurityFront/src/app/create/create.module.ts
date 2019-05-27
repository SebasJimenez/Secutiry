import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenCreateComponent } from './screen-create/screen-create.component';
import { RegisterComponent } from './register/register.component';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CreateRoutingModule } from './create-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { MatDialogModule, MatDialogRef } from '@angular/material';
import { DialogService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MultiSelectModule } from 'primeng/multiselect';
import {ToolbarModule} from 'primeng/toolbar';
import {SidebarModule} from 'primeng/sidebar';
import {TooltipModule} from 'primeng/tooltip';


@NgModule({
  declarations: [
    ScreenCreateComponent,
    RegisterComponent
  ],
  entryComponents: [
  ],
  imports: [
    CommonModule,
    SidebarModule,
    DropdownModule,
    TooltipModule,
    CreateRoutingModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    DialogModule,
    ToolbarModule,
    ToastModule,
    FormsModule,
    ButtonModule,
    PasswordModule,
    InputTextModule,
    MatDialogModule,
    MultiSelectModule
  ],
  providers: [
     DialogService, {provide: MatDialogRef, useValue: {}},
  ],
})
export class CreateModule { }
