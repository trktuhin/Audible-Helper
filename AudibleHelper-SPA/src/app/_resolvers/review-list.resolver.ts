import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Review } from '../_models/review';
import { ReviewService } from '../_services/review.service';

@Injectable()
export class ReviewListResolver implements Resolve<Review[]> {
  pageNumber = 1;
  pageSize = 10;

  constructor(
    private revService: ReviewService,
    private router: Router,
    private alertify: AlertifyService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Review[]> {
    return this.revService.getReviews({
      pageNumber: this.pageNumber,
      pageSize: this.pageSize
    }).pipe(
      catchError( error => {
        this.alertify.error(error);
        this.router.navigate(['/home']);
        return of(null);
      })
    );
  }
}
