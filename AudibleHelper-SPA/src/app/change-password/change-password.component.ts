import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordChange } from '../_models/passwordChange';
import { UserService } from '../_services/user.service';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { User } from '../_models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  passChange: PasswordChange;
  passwordChangeForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService,
              private authService: AuthService,
              private alertify: AlertifyService,
              private router: Router
              ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.passwordChangeForm = this.fb.group({
      oldPassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)] ],
      newPassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)] ],
      confirmPassword: ['', Validators.required]
    }, {
      validators: [this.passwordMatchValidators]
    });
  }

  passwordMatchValidators(g: FormGroup) {
    return g.get('newPassword').value === g.get('confirmPassword').value ? null : {mismatch: true};
  }

  changePassword() {
    if (this.passwordChangeForm.valid) {
      this.passChange = Object.assign({}, this.passwordChangeForm.value);
      this.userService.changePassword(this.authService.decodedToken.nameid, this.passChange).subscribe(() => {
        this.alertify.success('Password changed successfully ');
      }, err => {
        console.log(err);
        this.alertify.error(err);
      }, () => {
        const model = {
          username: this.authService.decodedToken.unique_name,
          password: this.passChange.newPassword
        };
        this.authService.login(model).subscribe(() => {
          this.router.navigate(['/members']);
        });
      });
    }
  }

}
