import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AceptarService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<boolean> {
    return of(true).pipe(
      tap(val => this.isLoggedIn = true)
    );
  }

  logout(): Observable<boolean> {
    return of(false).pipe(
      tap(val => this.isLoggedIn = false)
    );
  }

  constructor(private http: HttpClient) { }
}
