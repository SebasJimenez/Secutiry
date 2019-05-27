import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/model/User.model';
import { MessageService, ConfirmationService, Message, MenuItem } from 'primeng/api';
import { ConsultService } from '../consult.service';
import { RegisterComponent } from 'src/app/create/register/register.component';
import { MatDialog } from '@angular/material';
import { Rol } from 'src/app/model/Rol.model';
import { CreateService } from 'src/app/create/create.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [
    ConfirmationService,
    RegisterComponent,
    MessageService
  ]
})
export class TableComponent implements OnInit {
  @Input()
  registerForm: FormGroup;
  user: User[];
  editing = false;
  roles: Rol[];
  msgs: Message[] = [];
  login: any;
  u: User;
  visibleSidebar1;
  constructor(public consultService: ConsultService, public registerComponent: RegisterComponent,
              public dialog: MatDialog, public createService: CreateService, private fb: FormBuilder,
              public confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit() {
    this.userCons();
    this.rolCons();
  }

  rolCons() {
    this.createService.rol()
    .subscribe(
      success => {
        this.roles = success;
      }
    );
  }

  userCons() {
    this.consultService.user()
    .subscribe(
      success => {
        this.user = success;
      }
    );
  }

  onRowDelete(users: User) {
    this.consultService.delete(users)
    .subscribe(
      success => {
        if (success) {
          this.showDelete();
          this.userCons();
        }
      }
    );
  }

  onRegister(registerForm: User) {
    this.createService.register(registerForm)
    .subscribe(
      (success: any) => {
        if (success) {
          this.showCreate();
          this.userCons();
        }
      }
    );
  }

  users() {
    this.createService.userLogged = true;
  }

  onRowAdd() {
    this.users();
    this.dialog.open(RegisterComponent, {
      width: '500px',
      data: this.login
    }).afterClosed().subscribe(
      success => {
        if (this.createService.userLogged === true) {
            this.onRegister(success);
            this.userCons();
        }
      }
    );
  }

  onModify(user: User) {
    if (user.email !== '' && user.nameC !== '' && user.password !== '' && user.user !== '') {
      this.consultService.modify(user)
      .subscribe(
      success => {
        if (success) {
         this.showModify();
         this.userCons();
        }
      });
    }
  }

  showCreate() {
    this.messageService.add({key: 'custom', severity: 'success', summary: 'Crear', detail: 'Se Creó un usuario'});
  }

  showModify() {
    this.messageService.add({key: 'custom', severity: 'success', summary: 'Modificar', detail: 'Se modificó un usuario'});
  }

  showDelete() {
    this.messageService.add({key: 'custom', severity: 'success', summary: 'Eliminar', detail: 'Se Eliminó un usuario'});
  }

  onCreate(registerForm) {
    this.onRegister(registerForm);
    this.messageService.clear('c');
  }

  showConfirm(user: User) {
    this.u = user;
    this.messageService.clear();
    this.messageService.add({
    key: 'c',
    sticky: true,
    severity: 'warn',
    summary: '¿Estás seguro?',
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
