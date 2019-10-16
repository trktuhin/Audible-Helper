import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { AssignmentService } from 'src/app/_services/assignment.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  assignment = {
    bookAsin: '',
    assignedToId: this.authService.decodedToken.nameid,
    totalCodes: 25,
    country: 'us',
    startingRating: 0,
    assignedDate: ''
  };
  todayDate = new Date();
  bsConfig: Partial<BsDatepickerConfig>;
  constructor(private authService: AuthService, private assService: AssignmentService,
              private alertify: AlertifyService, private datePipe: DatePipe) { }

  ngOnInit() {

  }

  AddAssignment() {
    if (this.assignment.bookAsin === '') {
      this.alertify.error('Please enter book asin first');
      return;
    }
    this.assignment.assignedDate = this.datePipe.transform(this.todayDate, 'MM/dd/yyyy');
    this.assService.addAssignment(this.assignment).subscribe(() => {
      this.alertify.success('Assignment added');
    }, err => {
      this.alertify.error(err);
    });
  }

}
