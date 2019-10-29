import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/_models/Assignment';
import { Pagination, PaginatedResult } from 'src/app/_models/pagination';
import { User } from 'src/app/_models/user';
import { AssignmentService } from 'src/app/_services/assignment.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { BsDatepickerConfig, BsModalRef, BsModalService, DayPickerComponent } from 'ngx-bootstrap';
import { AssignmentModalComponent } from '../assignment-modal/assignment-modal.component';
import { AuthService } from 'src/app/_services/auth.service';

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
  totalCodes = 0;
  isCompleted = false;
  bsConfig: Partial<BsDatepickerConfig>;
  countryList = [{value: '', display: 'All'}, {value: 'us', display: 'US'}, {value: 'uk', display: 'UK'}];
  completeList = [{value: true , display: 'Complete'}, {value: false, display: 'Incomplete'}];
  bsModalRef: BsModalRef;

  constructor(
    private assService: AssignmentService,
    private alertify: AlertifyService,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private authService: AuthService,
    private modalService: BsModalService) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.assignments = data.assignments.result;
      this.pagination = data.assignments.pagination;
      this.user = data.user;
      this.calculateTotalCodes();
    });
    this.route.params.subscribe(params => {
      if (params.id) {
          this.assignedToId = +params.id;
      }
    });
  }

  calculateTotalCodes() {
    this.totalCodes = 0;
    this.assignments.forEach(element => {
      this.totalCodes += element.totalCodes;
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
      dateTo,
      isCompleted: this.isCompleted
    };
    this.assService.getAssignments(assignment).subscribe((res: PaginatedResult<Assignment[]>) => {
      this.assignments = res.result;
      this.pagination = res.pagination;
      this.calculateTotalCodes();
    },
    error => {
      this.alertify.error(error);
    });
  }

  markAsComplete(id: number) {
    this.alertify.confirmWithTitle('Are you sure?', 'This will be marked as complete', () => {
      this.assService.markAsComplete(id).subscribe(() => {
        this.alertify.success('Marked the assignment as complete');
        this.loadAssignments();
      }, err => {
        this.alertify.error(err);
      });
    });
  }

  editAssignmentModal(assignment: Assignment) {

    const initialState = {
      assignment
    };
    this.bsModalRef = this.modalService.show(AssignmentModalComponent, {initialState});
    this.bsModalRef.content.updateAssignment.subscribe(assignment => {
      this.updateAssignment(assignment);
    });
  }

  updateAssignment(assignment) {
     const isAdmin = this.authService.roleMatch(['Admin']);
     const today = this.datePipe.transform(new Date(), 'MM/dd/yyyy');
     const assignedDate = this.datePipe.transform(assignment.assignedDate, 'MM/dd/yyyy');
     if (isAdmin === false && today !== assignedDate) {
      this.alertify.error('You are not allowed to edit previous assignments');
      return;
     }
     this.assService.updateAssignment(assignment).subscribe(() => {
       this.alertify.success('Assignment updated');
       this.loadAssignments();
     }, err => {
       this.alertify.error(err);
     });
  }

  deleteAssignment(assignment: Assignment) {
    const isAdmin = this.authService.roleMatch(['Admin']);
    const today = this.datePipe.transform(new Date(), 'MM/dd/yyyy');
    const assignedDate = this.datePipe.transform(assignment.assignedDate, 'MM/dd/yyyy');
    if (isAdmin === false && today !== assignedDate) {
      this.alertify.error('You are not allowed to delete previous assignments');
      return;
     }
    this.alertify.confirmWithTitle('Are you sure', 'This will be deleted', () => {
      this.assService.deleteAssignment(assignment.id).subscribe(() => {
        this.alertify.success('Assignment deleted');
        this.loadAssignments();
      }, err => {
        this.alertify.error(err);
      });
    });
  }

}
