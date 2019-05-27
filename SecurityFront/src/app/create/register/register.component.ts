import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreateService } from '../create.service';
import { Rol } from 'src/app/model/Rol.model';
import {ConfirmationService, Message, MessageService} from 'primeng/api';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class RegisterComponent implements OnInit {
  @Input()
  registerForm: FormGroup;
  rolForm: FormGroup;
  roles: Rol[];
  selectedRol: Rol;
  msgs: Message[] = [];
  constructor(private fb: FormBuilder, public createService: CreateService,
              public dialog: MatDialogRef<RegisterComponent>) {
   }

  ngOnInit() {
    this.registerForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nameC: ['', Validators.required],
      rol: ['', Validators.required]
    });
    this.rolForm = this.fb.group({
      name: ['', Validators.required]
    });
    this.rolCons();
  }
  get username() { return this.registerForm.get('user'); }
  get password() { return this.registerForm.get('password'); }
  get email() { return this.registerForm.get('email'); }
  get nameC() { return this.registerForm.get('nameC'); }
  get name() {return this.rolForm.get('name'); }
  get f() { return this.registerForm.controls; }

  rolCons() {
    this.createService.rol()
    .subscribe(
      success => {
        this.roles = success;
      }
    );
  }

  cancel() {
    this.dialog.close();
  }

  rols() {
    this.createService.rolLogged = true;
  }

  onSubmit() {
    if (this.createService.userLogged === true) {
      this.dialog.close(this.registerForm.value);
    } else if (this.createService.rolLogged === true) {
      this.dialog.close(this.rolForm.value);
    }
  }
}
