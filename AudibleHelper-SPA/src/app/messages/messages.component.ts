import { Component, OnInit } from '@angular/core';
import { Message } from '../_models/message';
import { Pagination, PaginatedResult } from '../_models/pagination';
import { UserService } from '../_services/user.service';
import { AuthService } from '../_services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { BsDatepickerConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: Message[];
  pagination: Pagination;
  messageContainer: 'Unread';
  dateTo = new Date();
  bsConfig: Partial<BsDatepickerConfig>;
  constructor(private userService: UserService, private authService: AuthService,
              private route: ActivatedRoute, private alertify: AlertifyService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.messages = data.messages.result;
      this.pagination = data.messages.pagination;
    });
  }

  loadMessages() {
    this.userService.getMessages(this.authService.decodedToken.nameid, this.pagination.currentPage,
      this.pagination.itemsPerPage, this.messageContainer).subscribe((res: PaginatedResult<Message[]>) => {
        this.messages = res.result;
        this.pagination = res.pagination;
      }, err => {
        this.alertify.error(err);
      });
  }

  deleteMessage(id: number) {
    this.alertify.confirmWithTitle('Confirmation', 'Are you sure to delete this message?', () => {
      this.userService.deleteMessage(this.authService.decodedToken.nameid, id).subscribe(() => {
        this.messages.splice(this.messages.findIndex(m => m.id === id), 1);
        this.alertify.success('Message has been deleted');
      }, err => {
        this.alertify.error('Failed to delete message');
      });
    });
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadMessages();
  }

  deleteAllMessage() {
    this.alertify.confirmWithTitle('Are you sure?', 'All messages before ' + this.dateTo + ' will be permanently deleted',
    () => {
      this.userService.deleteMessages(this.dateTo).subscribe(() => {
        this.alertify.success('All messages have been deleted');
        this.loadMessages();
      }, err => {
        this.alertify.error(err);
      });
    });
  }

}
