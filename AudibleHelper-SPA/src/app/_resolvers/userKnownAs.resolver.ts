import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserService } from '../_services/user.service';
import { User } from '../_models/user';

@Injectable()
export class UserKnownAsResolver implements Resolve<User> {
  constructor(
    private router: Router,
    private alertify: AlertifyService,
    private userService: UserService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    let reviewerId = 0;
    if (route.params.id) {
      reviewerId = +route.params.id;
    }
    return this.userService.getUser(reviewerId).pipe(
      catchError( error => {
        this.alertify.error(error);
        this.router.navigate(['/home']);
        return of(null);
      })
    );
  }
}
