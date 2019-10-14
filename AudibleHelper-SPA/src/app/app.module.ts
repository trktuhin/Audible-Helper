import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule, TabsModule, BsDatepickerModule, PaginationModule, ButtonsModule, ModalModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { NgxSpinnerModule } from 'ngx-spinner';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { appRoutes } from './routes';
import { AuthGuard } from './_guards/Auth.guard';
import { UserService } from './_services/user.service';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { JwtModule } from '@auth0/angular-jwt';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { PhotoEditorComponent } from './members/photo-editor/photo-editor.component';
import { FileUploadModule } from 'ng2-file-upload';
import { TimeAgoPipe } from 'time-ago-pipe';
import { MessagesResolver } from './_resolvers/messages.resolver';
import { MemberMessagesComponent } from './members/member-messages/member-messages.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { HasRoleDirective } from './_directives/hasRole.directive';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { AdminService } from './_services/admin.service';
import { RolesModalComponent } from './admin/roles-modal/roles-modal.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { ReviewService } from './_services/review.service';
import { ReviewListResolver } from './_resolvers/review-list.resolver';
import { FetchReviewComponent } from './fetch-review/fetch-review.component';
import { UserKnownAsResolver } from './_resolvers/userKnownAs.resolver';
import { SessionManagementComponent } from './admin/session-management/session-management.component';
import { SessionModalComponent } from './admin/session-modal/session-modal.component';
import { ReviewAuditComponent } from './admin/review-audit/review-audit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatePipe } from '@angular/common';
import { AssignmentListComponent } from './assignment/assignment-list/assignment-list.component';
import { AssignmentService } from './_services/assignment.service';
import { AssignmentListResolver } from './_resolvers/assignment-list.resolver';
import { AddAssignmentComponent } from './assignment/add-assignment/add-assignment.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MemberListComponent,
      MessagesComponent,
      MemberCardComponent,
      MemberDetailComponent,
      MemberEditComponent,
      PhotoEditorComponent,
      TimeAgoPipe,
      MemberMessagesComponent,
      AdminPanelComponent,
      HasRoleDirective,
      UserManagementComponent,
      RolesModalComponent,
      ChangePasswordComponent,
      ReviewListComponent,
      FetchReviewComponent,
      SessionManagementComponent,
      SessionModalComponent,
      ReviewAuditComponent,
      DashboardComponent,
      AssignmentListComponent,
      AddAssignmentComponent
   ],
   imports: [
      BrowserModule,
      BsDatepickerModule.forRoot(),
      HttpClientModule,
      FormsModule,
      NgxGalleryModule,
      FileUploadModule,
      ReactiveFormsModule,
      NgxSpinnerModule,
      BsDropdownModule.forRoot(),
      ButtonsModule.forRoot(),
      PaginationModule.forRoot(),
      ModalModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      TabsModule.forRoot(),
      JwtModule.forRoot({
        config: {
          tokenGetter,
          whitelistedDomains: ['localhost:5000']
        }
      })
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      UserService,
      MemberDetailResolver,
      MemberListResolver,
      MemberEditResolver,
      PreventUnsavedChanges,
      MessagesResolver,
      AdminService,
      ReviewService,
      ReviewListResolver,
      UserKnownAsResolver,
      DatePipe,
      AssignmentService,
      AssignmentListResolver
   ],
   entryComponents: [
    RolesModalComponent,
    SessionModalComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
