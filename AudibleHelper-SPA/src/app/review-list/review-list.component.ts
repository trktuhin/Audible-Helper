import { Component, OnInit } from '@angular/core';
import { Review } from '../_models/review';
import { Pagination, PaginatedResult } from '../_models/pagination';
import { ReviewService } from '../_services/review.service';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { User } from '../_models/user';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  reviews: Review[];
  revParams: any = {};
  pagination: Pagination;
  reviewerId = 0;
  dateFrom: Date;
  dateTo: Date;
  bookAsin: string;
  country = '';
  user: User;
  bsConfig: Partial<BsDatepickerConfig>;
  countryList = [{value: '', display: 'All'}, {value: 'us', display: 'US'}, {value: 'uk', display: 'UK'}];

  constructor(
    private revService: ReviewService,
    private alertify: AlertifyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.reviews = data.reviews.result;
      this.pagination = data.reviews.pagination;
      this.user = data.user;
    });

    this.route.params.subscribe(params => {
      if (params.id) {
          this.reviewerId = +params.id;
      }
    });
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadReviews();
  }
  loadReviews() {
    const revParam = {
      pageNumber: this.pagination.currentPage,
      pageSize: 10,
      reviewerId: this.reviewerId,
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
      country: this.country,
      bookAsin: this.bookAsin
    };
    this.revService
      .getReviews(revParam)
      .subscribe(
        (res: PaginatedResult<Review[]>) => {
          this.reviews = res.result;
          this.pagination = res.pagination;
        },
        error => {
          this.alertify.error(error);
        }
      );
  }

  deleteReview(review: Review) {
    this.alertify.confirmWithTitle('Are you sure to delete this review?',
      'This will be permanently deleted if you click Ok', () => {
      this.revService.deleteReview(review).subscribe(
        () => {
          // this.reviews.splice(this.reviews.findIndex(rev => rev === review), 1);
          this.loadReviews();
          this.alertify.success('Review has been deleted ');
        },
        err => {
          this.alertify.error('Could not delete review !');
        }
      );
    });
  }

  resetFilters() {
    this.bookAsin = '';
    this.dateFrom = undefined;
    this.dateTo = undefined;
    this.country = '';
  }
}
