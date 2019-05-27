import { OnInit, Component } from '@angular/core';
import { AceptarService } from '../aceptar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen-acep',
  templateUrl: './screen-acep.component.html',
  styleUrls: ['./screen-acep.component.css']
})
export class ScreenAcepComponent implements OnInit {
  message: string;
  user: string = localStorage.getItem('user');

  constructor(public aceptarService: AceptarService, public router: Router) { }

  ngOnInit() {
  }

  /*logout() {
    this.aceptarService.logout().subscribe(() => {
      if (!this.aceptarService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        const redirect = this.aceptarService.redirectUrl ? this.router.parseUrl(this.aceptarService.redirectUrl) : '/login';

        // Redirect the user
        this.router.navigateByUrl(redirect);
      }
    });
    return true;
  }*/
}
