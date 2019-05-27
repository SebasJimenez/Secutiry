import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ConsultRoutingModule } from './consult-routing.module';
import { ScreenComponent } from './screen/screen.component';
import { TableComponent } from './table/table.component';
import { TableModule } from 'primeng/table';
import { RegisterComponent } from '../create/register/register.component';
import {DialogModule} from 'primeng/dialog';
import { MatDialogModule } from '@angular/material';
import {ToastModule} from 'primeng/toast';
import { TableRolComponent } from './table-rol/table-rol.component';
import {InputMaskModule} from 'primeng/inputmask';
import {MultiSelectModule} from 'primeng/multiselect';
import {ToolbarModule} from 'primeng/toolbar';
import {SidebarModule} from 'primeng/sidebar';
import {TooltipModule} from 'primeng/tooltip';

@NgModule({
  declarations: [
    ScreenComponent,
    TableComponent,
    RegisterComponent,
    TableRolComponent
  ],
  entryComponents:[
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MultiSelectModule,
    DropdownModule,
    TooltipModule,
    SidebarModule,
    DialogModule,
    ConsultRoutingModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    FormsModule,
    InputMaskModule,
    ButtonModule,
    ToastModule,
    PasswordModule,
    ToolbarModule,
    InputTextModule,
    TableModule,
    MatDialogModule
  ]
})
export class ConsultModule { }
