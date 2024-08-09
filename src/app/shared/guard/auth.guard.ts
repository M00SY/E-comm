import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {

let _Router:Router = inject(Router)

if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
  if (localStorage.getItem("userToken") != null) {
    return true; // يمكن الوصول إلى المسار
  } else {
    _Router.navigate(['/login']); // إعادة توجيه إلى صفحة تسجيل الدخول
    return false;
  }
}

// في حالة عدم وجود localStorage، اعيد التوجيه
_Router.navigate(['/login']);
return false;

};
