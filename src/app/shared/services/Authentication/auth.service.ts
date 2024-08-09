import { Environment } from './../../../Base/Environment';
import { Login, Register } from './../../interfaces/userinterface';
import { HttpClient } from '@angular/common/http';
import { EnvironmentInjector, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from "jwt-decode";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(public _HttpClient: HttpClient, private _Router: Router) {
    if (this.isBrowser()) {
      const userToken = localStorage.getItem("userToken");
      const currentPage = localStorage.getItem("currentPage");
  
      if (userToken != null) {
        this.userInform(userToken);
        this.userData.next(userToken); // تخزين الـ userToken في الـ BehaviorSubject
        if (currentPage) {
          this._Router.navigate([currentPage]); // استخدم currentPage كقيمة فعلية
        }
      }
    }
  }
  sendRegister(data: Register): Observable<any> {
    return this._HttpClient.post(`${Environment.baseURl}/api/v1/auth/signup`, data);
  }

  sendLogin(data: Login): Observable<any> {
    return this._HttpClient.post(`${Environment.baseURl}/api/v1/auth/signin`, data);
  }

  userInform(token: string | null = null) {
    if (this.isBrowser() && token) {
      this.userData.next(jwtDecode(token));
      console.log(this.userData.getValue());
    }
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
