import { Component, OnInit, Input } from '@angular/core';
import { CreateService } from 'src/app/create/create.service';
import { Rol } from 'src/app/model/Rol.model';
import { MatDialog } from '@angular/material';
import { RegisterComponent } from 'src/app/create/register/register.component';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ConsultService } from '../consult.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-table-rol',
  templateUrl: './table-rol.component.html',
  styleUrls: ['./table-rol.component.css'],
  providers: [
    ConfirmationService,
    RegisterComponent,
    MessageService
  ]
})
export class TableRolComponent implements OnInit {
  @Input()
  roles: Rol[];
  login: any;
  u: Rol;
  visibleSidebar1;
  constructor(public createService: CreateService, public dialog: MatDialog, public registerComponent: RegisterComponent,
              private messageService: MessageService, public consultService: ConsultService,
              public confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.rolCons();

  }

  rolCons() {
    this.createService.rol()
    .subscribe(
      (success) => {
        this.roles = success;
      }
    );
  }

  createRol(rolForm: Rol) {
    this.createService.createRol(rolForm)
    .subscribe(
      (success: any) => {
        if (success) {
          this.showRol();
          this.rolCons();
        }
      }
    );
  }

  onModify(rol: Rol) {
    if (rol.name !== '') {
      this.consultService.modifyRol(rol)
      .subscribe(
      (success) => {
        if (success) {
         this.showModify(rol.id);
         this.rolCons();
        }
      }
    );
    }
  }

  onRowDelete(rol: Rol) {
    this.consultService.deleteRol(rol)
    .subscribe(
      (success) => {
        if (success) {
          this.showDelete(rol.id);
          this.rolCons();
        }
      }
    );
  }

  onRowAdd() {
    this.rols();
    this.dialog.open(RegisterComponent, {
      width: '500px',
      data: this.login
    }).afterClosed().subscribe(
      (success) => {
        if (this.createService.rolLogged === true) {
            this.createRol(success);
            this.rolCons();
        }
      }
    );
  }

  rols() {
    this.createService.rolLogged = true;
  }

  showRol() {
    this.messageService.add({key: 'custom', severity: 'success', summary: 'Crear', detail: 'Se creó un Rol'});
  }

  showDelete(id: number) {
    this.messageService.add({key: 'custom', severity: 'success', summary: 'Eliminar', detail: 'Se eliminó el rol #' + id});
  }

  showModify(id: number) {
    this.messageService.add({key: 'custom', severity: 'success', summary: 'Modificar', detail: 'Se modificó el rol #' + id});
  }
  showConfirm(rol: Rol) {
    this.u = rol;
    this.messageService.clear();
    this.messageService.add({
    key: 'c',
    sticky: true,
    severity: 'warn',
    summary: '¿Estás Seguro de eliminar el rol #' + rol.id + '?',
    detail: 'Confirma para proceder'});
  }

  onConfirm() {
    this.onRowDelete(this.u);
    this.messageService.clear('c');
  }

  onReject() {
    this.messageService.clear('c');
  }
}
