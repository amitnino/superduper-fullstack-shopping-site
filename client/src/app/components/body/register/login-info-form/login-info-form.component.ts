import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ConfirmEqualValidator from 'src/app/validators/confirm-equal.validator';
import newEmailValidator from 'src/app/validators/email.validator';
import IsraeliIdValidator from 'src/app/validators/israeliId.validator';

@Component({
  selector: 'app-login-info-form',
  templateUrl: './login-info-form.component.html',
  styleUrls: ['./login-info-form.component.css']
})
export class LoginInfoFormComponent implements OnInit {

  @Input()
  setFirstStepToCompleted;

  public loginInfoForm: FormGroup;

  constructor(
    public fb: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.loginInfoForm = this.fb.group({
      username: ['', [Validators.required, newEmailValidator]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', [Validators.required, ConfirmEqualValidator]],
      israeliId: ['', [Validators.required, IsraeliIdValidator], []],
    })
  }

  get usernameControl() {
    return this.loginInfoForm.controls['username'];
  }
  get passwordControl() {
    return this.loginInfoForm.controls['password'];
  }
  get confirmPasswordControl() {
    return this.loginInfoForm.controls['confirmPassword'];
  }
  get israeliIdControl() {
    return this.loginInfoForm.controls['israeliId'];
  }

}
