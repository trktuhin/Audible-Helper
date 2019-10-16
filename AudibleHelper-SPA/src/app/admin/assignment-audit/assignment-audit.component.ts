import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { Session } from 'src/app/_models/session';
import { Assignment } from 'src/app/_models/Assignment';
import { Pagination, PaginatedResult } from 'src/app/_models/pagination';
import { UserService } from 'src/app/_services/user.service';
import { SessionService } from 'src/app/_services/session.service';
import { AssignmentService } from 'src/app/_services/assignment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assignment-audit',
  templateUrl: './assignment-audit.component.html',
  styleUrls: ['./assignment-audit.component.css']
})
export class AssignmentAuditComponent implements OnInit {
  users: User[] = [];
  sessions: Session[] = [];
  assignments: Assignment[] = [];
  pagination: Pagination;
  country = '';
  totalCodes = 0;
  countryList = [
    { value: '', display: 'All' },
    { value: 'us', display: 'US' },
    { value: 'uk', display: 'UK' }
  ];
  sessionId = -1;
  userId = -1;
  bookAsin = '';
  completeList = [{value: true , display: 'Complete'}, {value: false, display: 'Incomplete'}];
  isCompleted = true;

  constructor(
    private userService: UserService,
    private sessionService: SessionService,
    private assService: AssignmentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadUsers();
    this.loadSessions();
    this.route.data.subscribe(data => {
      this.assignments = data.assignments.result;
      this.pagination = data.assignments.pagination;
      this.calculateTotalCodes();
    });
  }

  loadUsers() {
    this.userService.getAllUser().subscribe(
      users => {
        this.users = users;
      },
      err => {
        console.log(err);
      }
    );
  }

  loadSessions() {
    this.sessionService.getSessions().subscribe(
      sessions => {
        this.sessions = sessions;
      },
      err => {
        console.log(err);
      }
    );
  }

  loadAssignments() {
    const assParam = {
      pageNumber: this.pagination.currentPage,
      pageSize: 10,
      assignedToId: this.userId,
      country: this.country,
      bookAsin: this.bookAsin,
      sessionId: this.sessionId,
      isCompleted: this.isCompleted
    };
    this.assService.getAssignments(assParam).subscribe(
      (res: PaginatedResult<Assignment[]>) => {
        this.assignments = res.result;
        this.pagination = res.pagination;
        this.calculateTotalCodes();
      },
      error => {
        console.log(error);
      }
    );
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadAssignments();
  }

  calculateTotalCodes() {
    this.totalCodes = 0;
    this.assignments.forEach(element => {
      this.totalCodes += element.totalCodes;
    });
  }
}
