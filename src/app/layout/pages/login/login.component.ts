import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/Authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  isLoading : boolean = false
  errMessage :string = ""

  loginForm : FormGroup = new FormGroup ( {
   
    email : new FormControl (null ,[Validators.required , Validators.email] ),
    password: new FormControl (null , [Validators.required,Validators.pattern(/^[ A-Z][0-9]{6}/)]),
  },)

constructor( public _AuthService:AuthService ,public _Router:Router ){

}

 loginsubmit(){


    this.isLoading = true
    this._AuthService.sendLogin(this.loginForm.value).subscribe({
      next:(res)=>{console.log(res)
        this.isLoading = false
        localStorage.setItem("userToken" , res.token)
       this._AuthService.userInform()
       
       
        this._Router.navigate(['home'])

    },
    error :(err)=>{
      this.errMessage =err.error.message
      this.isLoading = false

    }
  })
  }
}
