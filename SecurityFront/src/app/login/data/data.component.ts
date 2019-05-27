import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { ScreenAcepComponent } from 'src/app/aceptar/screen-acep/screen-acep.component';
import { AceptarService } from 'src/app/aceptar/aceptar.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  @Input() loginForm: FormGroup;

  screen: ScreenAcepComponent;

  constructor(public aceptarService: AceptarService, private service: LoginService,
              private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit() {
    localStorage.setItem('user', this.loginForm.value.username);
    this.service.login(this.loginForm.value)
    .subscribe(
      (success: any) => {
        if (success.name === 'Encargado') {

        } else if (success.name === 'Analista') {

        } else if (success.name === 'Funcionario') {

        } else if (success.name === 'Administrador') {
          this.router.navigateByUrl('/consult');
        } else {
          alert('Usuario o Contraseña incorrectos');
        }
      });
  }

}
