import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig, BsModalService, BsModalRef } from 'ngx-bootstrap';
import { SessionService } from 'src/app/_services/session.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Session } from 'src/app/_models/session';
import { SessionModalComponent } from '../session-modal/session-modal.component';

@Component({
  selector: 'app-session-management',
  templateUrl: './session-management.component.html',
  styleUrls: ['./session-management.component.css']
})
export class SessionManagementComponent implements OnInit {
  startDate = new Date();
  endDate = new Date();
  name = '';
  bsConfig: Partial<BsDatepickerConfig>;
  sessions: Session[] = [];
  bsModalRef: BsModalRef;

  constructor(private sessionService: SessionService, private alertify: AlertifyService,
              private modalService: BsModalService) { }

  ngOnInit() {
    this.loadSessions();
  }

  loadSessions() {
    this.sessionService.getSessions().subscribe(sessions => {
      this.sessions = sessions;
    });
  }

  addSession() {
    this.sessionService.addSession(this.startDate, this.endDate, this.name).subscribe(() => {
      this.alertify.success('Session added successfully');
      this.loadSessions();
    }, err => {
      this.alertify.error('Could not add session');
    });
  }

  editSessionModal(session: Session) {
    const initialState = {
      session
    };
    this.bsModalRef = this.modalService.show(SessionModalComponent, {initialState});
    this.bsModalRef.content.updateSession.subscribe(session => {
      this.updateSession(session);
    });
  }

  updateSession(session) {
    this.sessionService.updateSession(session).subscribe(() => {
      this.loadSessions();
      this.alertify.success('Session was updated')
    }, err => {
      this.alertify.error(err);
    });
  }

  deleteSession(id: number) {
    this.alertify.confirmWithTitle('Are you sure to delete this session?',
    'This will be permanently deleted if you click Ok', () => {
      this.sessionService.deleteSession(id).subscribe(() => {
        this.loadSessions();
        this.alertify.success('Session was deleted');
      }, err => {
        this.alertify.error(err);
      });
    });
  }

}
