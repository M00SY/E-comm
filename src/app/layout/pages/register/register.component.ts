import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/Authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  isLoading : boolean = false
  errMessage :string = ""

  registerForm : FormGroup = new FormGroup ( {
    name : new FormControl (null,[Validators.required,Validators.minLength(3),Validators.maxLength(35)]),
    email : new FormControl (null ,[Validators.required , Validators.email] ),
    password: new FormControl (null , [Validators.required,Validators.pattern(/^[ A-Z][0-9]{6}/)]),
    rePassword: new FormControl(null , [Validators.required,Validators.pattern(/^[ A-Z][0-9]{6}/)]),
    phone : new FormControl (null , [Validators.required,Validators.pattern(/^(010|011|012)[0-9]{8}$/)])


  }, this.confirmPassword)

constructor( public _AuthService:AuthService ,public _Router:Router ){

}

  registersubmit(){


    this.isLoading = true
    this._AuthService.sendRegister(this.registerForm.value).subscribe({
      next:(res)=>{console.log(res)
        this.isLoading = false
        this._Router.navigate(['login'])

    },
    error :(err)=>{
      this.errMessage =err.error.message
      this.isLoading = false

    }
  })
  }

  confirmPassword(g:any){
    if (g.get('password').value === g.get('rePassword').value) { return null
    }
    else{
      return {'passMatched' :true}
    }
  }








}
