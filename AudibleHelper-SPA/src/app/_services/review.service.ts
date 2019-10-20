import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginatedResult } from '../_models/pagination';
import { Review } from '../_models/review';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
baseUrl = environment.apiUrl;

constructor(private http: HttpClient, private datePipe: DatePipe) { }

getReviews(revParams): Observable<PaginatedResult<Review[]>> {
  const paginatedResult: PaginatedResult<Review[]> = new PaginatedResult<Review[]>();
  return this.http
      .post<Review[]>(this.baseUrl + 'reviews/GetReviews', revParams, { observe: 'response' })
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

  addReviews(file: File, country: string, bookAsin: string) {
    const formData = new FormData();
    formData.append('File', file);
    formData.append('Country', country);
    formData.append('BookAsin', bookAsin);
    return this.http.post(this.baseUrl + 'Reviews', formData);
  }

  addReviewByDate(bookAsin: string, country: string, minimumDate: Date) {
    const minDate = this.datePipe.transform(minimumDate, 'MM/dd/yyyy');
    return this.http.post(this.baseUrl + 'Reviews/AddReviewByDate',
    {bookAsin, country, minimumDate: minDate});
  }

  deleteReview(review: Review) {
    return this.http.post(this.baseUrl + 'Reviews/DeleteReview', review);
  }

  deleteReviews(revParams) {
    return this.http.post(this.baseUrl + 'Reviews/DeleteRange', revParams);
  }
}
