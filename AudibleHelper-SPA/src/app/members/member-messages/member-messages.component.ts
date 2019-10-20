import { Component, OnInit, Input, ViewChild, ElementRef , AfterViewChecked, AfterContentInit, AfterViewInit, OnDestroy} from '@angular/core';
import { Message } from 'src/app/_models/message';
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css']
})
export class MemberMessagesComponent implements OnInit, AfterViewChecked, OnDestroy {
  @ViewChild('chatBox', null) myScrollContainer: ElementRef;
  @Input() recipientId: number;
  messages: Message[];
  newMessage: any = {};
  firstTime = true;
  subscription: Subscription;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {
    this.loadMessages();
    this.subscription = timer(0, 10000).pipe(
      switchMap(() => this.userService
      .getMessageThread(this.authService.decodedToken.nameid, this.recipientId))
    ).subscribe(messages => {
      if (this.messages[this.messages.length - 1].content !== messages[messages.length - 1].content) {
        this.messages = messages;
        this.firstTime = true;
      }
    },
    err => {
      this.alertify.error(err);
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
}

  ngAfterViewChecked() {
    if (this.firstTime !== false) {
      this.scrollToBottom();
    }
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      setTimeout(() => {
        this.firstTime = false;
      }, 2000);
    } catch (err) {}
  }

  loadMessages() {
    this.userService
      .getMessageThread(this.authService.decodedToken.nameid, this.recipientId)
      .subscribe(
        messages => {
          this.messages = messages;
        },
        err => {
          this.alertify.error(err);
        }
      );
  }

  sendMessage() {
    this.newMessage.recipientId = this.recipientId;
    this.userService
      .sendMessage(this.authService.decodedToken.nameid, this.newMessage)
      .subscribe(
        (message: Message) => {
          this.messages.push(message);
          this.newMessage.content = '';
          this.firstTime = true;
        },
        err => {
          this.alertify.error(err);
        }
      );
  }
}
