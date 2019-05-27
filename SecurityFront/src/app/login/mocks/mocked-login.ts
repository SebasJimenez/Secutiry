import { LoginService } from '../login.service';
import { of } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';

export class MockedLogin extends LoginService {
    loginForm: FormGroup;
      user: ['sebas'];
      pass: ['1234'];

    login(loginForm) {
      return of(true, false);
    }
}
