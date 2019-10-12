import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { Session } from 'src/app/_models/session';
import { UserService } from 'src/app/_services/user.service';
import { SessionService } from 'src/app/_services/session.service';
import { Review } from 'src/app/_models/review';
import { ReviewService } from 'src/app/_services/review.service';
import { Pagination, PaginatedResult } from 'src/app/_models/pagination';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-audit',
  templateUrl: './review-audit.component.html',
  styleUrls: ['./review-audit.component.css']
})
export class ReviewAuditComponent implements OnInit {
  users: User[] = [];
  sessions: Session[]  = [];
  reviews: Review[] = [];
  pagination: Pagination;
  country = '';
  countryList = [{value: '', display: 'All'}, {value: 'us', display: 'US'}, {value: 'uk', display: 'UK'}];
  sessionId = -1;
  userId = -1;
  bookAsin = '';

  constructor(private userService: UserService, private sessionService: SessionService,
              private revService: ReviewService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadUsers();
    this.loadSessions();
    this.route.data.subscribe(data => {
      this.reviews = data.reviews.result;
      this.pagination = data.reviews.pagination;
    });
  }

  loadUsers() {
    this.userService.getAllUser().subscribe(users => {
      this.users = users;
    }, err => {
      console.log(err);
    });
  }

  loadSessions() {
    this.sessionService.getSessions().subscribe(sessions => {
      this.sessions = sessions;
    }, err => {
      console.log(err);
    });
  }

  loadReviews() {
    const revParam = {
      pageNumber: this.pagination.currentPage,
      pageSize: 10,
      reviewerId: this.userId,
      country: this.country,
      bookAsin: this.bookAsin,
      sessionId: this.sessionId
    };
    this.revService.getReviews(revParam)
    .subscribe(
      (res: PaginatedResult<Review[]>) => {
        this.reviews = res.result;
        this.pagination = res.pagination;
      },
      error => {
        console.log(error);
      }
    );
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadReviews();
  }

}
