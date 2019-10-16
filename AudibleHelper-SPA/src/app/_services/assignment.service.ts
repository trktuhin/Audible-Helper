import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginatedResult } from '../_models/pagination';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { Assignment } from '../_models/Assignment';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
baseUrl = environment.apiUrl;

constructor(private http: HttpClient, private datePipe: DatePipe) { }

getAssignments(assParams): Observable<PaginatedResult<Assignment[]>> {
  const paginatedResult: PaginatedResult<Assignment[]> = new PaginatedResult<Assignment[]>();
  return this.http
      .post<Assignment[]>(this.baseUrl + 'assignment/GetAllAssignments', assParams, { observe: 'response' })
      .pipe(
        map(response => {
          paginatedResult.result = response.body;
          const header = response.headers.get('Pagination');
          if (header != null) {
            paginatedResult.pagination = JSON.parse(header);
          }
          return paginatedResult;
        })
      );
  }

  addAssignment(assignment) {
    return this.http.post(this.baseUrl + 'assignment', assignment);
  }

  markAsComplete(id: number) {
    return this.http.post(this.baseUrl + 'assignment/markComplete/' + id, {});
  }

  updateAssignment(assignment) {
    return this.http.put(this.baseUrl + 'assignment', assignment);
  }

  deleteAssignment(id: number) {
    return this.http.post(this.baseUrl + 'assignment/DeleteAssignment/' + id, {});
  }
}
