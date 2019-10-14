import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Assignment } from '../_models/Assignment';
import { AssignmentService } from '../_services/assignment.service';
import { DatePipe } from '@angular/common';

@Injectable()
export class AssignmentListResolver implements Resolve<Assignment[]> {
  pageNumber = 1;
  pageSize = 10;

  constructor(
    private assService: AssignmentService,
    private router: Router,
    private alertify: AlertifyService,
    private datePipe: DatePipe
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Assignment[]> {
    let assignedToId = 0;
    if (route.params.id) {
      assignedToId = +route.params.id;
    }
    const dateFrom = this.datePipe.transform(new Date(), 'MM/dd/yyyy');
    const dateTo = this.datePipe.transform(new Date(), 'MM/dd/yyyy');
    return this.assService.getAssignments({
      pageNumber: this.pageNumber,
      pageSize: this.pageSize,
      assignedToId,
      dateFrom,
      dateTo
    }).pipe(
      catchError( error => {
        this.alertify.error(error);
        this.router.navigate(['/']);
        return of(null);
      })
    );
  }
}
