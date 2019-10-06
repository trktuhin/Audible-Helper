import { Component, OnInit } from '@angular/core';
import { Review } from '../_models/review';
import { Pagination, PaginatedResult } from '../_models/pagination';
import { ReviewService } from '../_services/review.service';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  reviews: Review[];
  revParams: any = {};
  pagination: Pagination;

  constructor(
    private revService: ReviewService,
    private alertify: AlertifyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.reviews = data.reviews.result;
      this.pagination = data.reviews.pagination;
    });
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadReviews();
  }
  loadReviews() {
    const revParam = {
      pageNumber: this.pagination.currentPage,
      pageSize: 10
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
}
