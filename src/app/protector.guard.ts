import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { inject } from '@angular/core';

export const protectoGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService);
  const router = inject(Router);

  const cookie = cookieService.check('token');
  if (!cookie) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
