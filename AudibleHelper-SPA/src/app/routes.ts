import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/Auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { MessagesResolver } from './_resolvers/messages.resolver';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { ReviewListResolver } from './_resolvers/review-list.resolver';
import { FetchReviewComponent } from './fetch-review/fetch-review.component';
import { UserKnownAsResolver } from './_resolvers/userKnownAs.resolver';
import { DashboardComponent } from './dashboard/dashboard.component';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'changePassword', component: ChangePasswordComponent},
      {path: 'dashboard', component: DashboardComponent, resolve: {reviews: ReviewListResolver}
      , data: { roles: ['Admin', 'Moderator'] }},
      {path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver}},
      {path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver}},
      {path: 'member/edit', component: MemberEditComponent, resolve: {user: MemberEditResolver},
      canDeactivate: [PreventUnsavedChanges]},
      {path: 'messages', component: MessagesComponent, resolve: {messages: MessagesResolver}},
      {path: 'admin', component: AdminPanelComponent, data: { roles: ['Admin', 'Moderator'] }},
      {path: 'reviews/add', component: FetchReviewComponent},
      {path: 'reviews/:id', component: ReviewListComponent, data: { roles: ['Admin', 'Moderator'] },
        resolve: {reviews: ReviewListResolver, user: UserKnownAsResolver}},
      {path: 'reviews', component: ReviewListComponent, resolve: {reviews: ReviewListResolver}}
    ]
  },

  {path: '**', redirectTo: '', pathMatch: 'full'}
];
