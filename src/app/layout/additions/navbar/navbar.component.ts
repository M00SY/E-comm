import { Component } from '@angular/core';
import {  Router, RouterLink, RouterLinkActive} from '@angular/router';
import { AuthService } from '../../../shared/services/Authentication/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

isLoging :boolean = false
constructor(public _AuthService:AuthService , public _Router :Router){}

ngOnInit(): void {
this._AuthService.userData.subscribe(()=> 
{
  if(this._AuthService.userData.getValue() == null)
  {
    this.isLoging = false
  }
  else
  {
    this.isLoging = true
  }
})

} 



logout()
{
  localStorage.removeItem("userToken") ;

  this._AuthService.userData.next(null)

  this._Router.navigate(['/login'])
}


}
