import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
  model: any = {};
  photoUrl: string;
  unreadMessageCount = 0;
  subscription: Subscription;

  constructor(
    public authService: AuthService,
    private alertify: AlertifyService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
    this.subscription = timer(0, 15000).pipe(
      switchMap(() => this.userService.getUnreadMessage())
    ).subscribe(count => this.unreadMessageCount = count, err => console.log(err));
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  login() {
    this.authService.login(this.model).subscribe(
      next => {
        this.alertify.success('Login successful ');
      },
      err => {
        this.alertify.error(err);
      }, () => {
        this.router.navigate(['/members']);
      }
    );
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    this.alertify.message('Logged out ');
    this.router.navigate(['/']);
  }
}
