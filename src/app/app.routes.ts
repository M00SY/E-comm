import { Routes } from '@angular/router';
import { LoginComponent } from './layout/pages/login/login.component';
import { RegisterComponent } from './layout/pages/register/register.component';
import { HomeComponent } from './layout/pages/home/home.component';
import { CartComponent } from './layout/pages/cart/cart.component';
import { ProductsComponent } from './layout/pages/products/products.component';
import { BrandsComponent } from './layout/pages/brands/brands.component';
import { CategoriesComponent } from './layout/pages/categories/categories.component';
import { NotfoundComponent } from './layout/additions/notfound/notfound.component';
import { authGuard } from './shared/guard/auth.guard';

export const routes: Routes = [
    {path:'',redirectTo : 'home', pathMatch : "full"},
    {path:'login',component : LoginComponent},
    {path:'register',component : RegisterComponent},
    {path:'home',canActivate:[authGuard],component : HomeComponent},
    {path:'cart', canActivate:[authGuard],component : CartComponent},
    {path:'products', canActivate:[authGuard],component : ProductsComponent},
    {path:'brands', canActivate:[authGuard],component : BrandsComponent},
    {path:'categories', canActivate:[authGuard],component : CategoriesComponent},
    {path:'**',component : NotfoundComponent},
];
