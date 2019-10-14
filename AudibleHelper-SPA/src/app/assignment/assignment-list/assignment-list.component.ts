import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/_models/Assignment';
import { Pagination, PaginatedResult } from 'src/app/_models/pagination';
import { User } from 'src/app/_models/user';
import { AssignmentService } from 'src/app/_services/assignment.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { BsDatepickerConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.css']
})
export class AssignmentListComponent implements OnInit {
  assignments: Assignment[];
  pagination: Pagination;
  user: User;

  revParams: any = {};
  assignedToId = 0;
  dateFrom = new Date();
  dateTo = new Date();
  bookAsin: string;
  country = '';
  bsConfig: Partial<BsDatepickerConfig>;
  countryList = [{value: '', display: 'All'}, {value: 'us', display: 'US'}, {value: 'uk', display: 'UK'}];


  constructor(
    private assService: AssignmentService,
    private alertify: AlertifyService,
    private route: ActivatedRoute,
    private datePipe: DatePipe) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.assignments = data.reviews.result;
      this.pagination = data.reviews.pagination;
      this.user = data.user;
      console.log(this.assignments);
    });

  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadAssignments();
  }

  loadAssignments() {
    const dateFrom = this.datePipe.transform(this.dateFrom, 'MM/dd/yyyy');
    const dateTo = this.datePipe.transform(this.dateTo, 'MM/dd/yyyy');
    const assignment = {
      pageNumber: this.pagination.currentPage,
      pageSize: this.pagination.itemsPerPage,
      assignedToId: this.assignedToId,
      dateFrom,
      dateTo
    };
    this.assService.getAssignments(assignment).subscribe((res: PaginatedResult<Assignment[]>) => {
      this.assignments = res.result;
      this.pagination = res.pagination;
    },
    error => {
      this.alertify.error(error);
    });
  }

}
