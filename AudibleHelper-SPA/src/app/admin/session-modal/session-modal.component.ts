import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Session } from 'src/app/_models/session';
import { BsModalRef, BsDatepickerConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-session-modal',
  templateUrl: './session-modal.component.html',
  styleUrls: ['./session-modal.component.css']
})
export class SessionModalComponent implements OnInit {
  @Output() updateSession = new EventEmitter();
  session: Session;
  bsConfig: Partial<BsDatepickerConfig>;
  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.session.startDate = new Date(this.session.startDate);
    this.session.endDate = new Date(this.session.endDate);
  }

  update() {
    this.updateSession.emit(this.session);
    this.bsModalRef.hide();
  }


}
