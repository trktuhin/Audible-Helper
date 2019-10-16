import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Assignment } from 'src/app/_models/Assignment';
import { BsDatepickerConfig, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-assignment-modal',
  templateUrl: './assignment-modal.component.html',
  styleUrls: ['./assignment-modal.component.css']
})
export class AssignmentModalComponent implements OnInit {
  @Output() updateAssignment = new EventEmitter();
  assignment: Assignment;
  bsConfig: Partial<BsDatepickerConfig>;
  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.assignment.assignedDate = new Date(this.assignment.assignedDate);
  }

  update() {
    this.updateAssignment.emit(this.assignment);
    this.bsModalRef.hide();
  }

}
