import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
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
  @Input()
  nextStepFn;

  public loginInfoForm: FormGroup;

  public showValidateButton: boolean = true;

  public usernameOrIsraeliIdTakenValues: {
    israeliId: string,
    username: string
  }

  constructor(
    public formBuilder: FormBuilder,
    public _userService: UserService,

  ) { }

  ngOnInit(): void {
    this.loginInfoForm = this.formBuilder.group({
      username: ['', [Validators.required, newEmailValidator]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', [Validators.required, ConfirmEqualValidator]],
      israeliId: ['', [Validators.required, IsraeliIdValidator]],
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

  public validateFormButton = async (): Promise<void> => {

    if (this.loginInfoForm.invalid) {

      console.log('Form is invalid');
      
      return;

    }

    const body = {
      israeliId: this.loginInfoForm.controls.israeliId.value,
      username: this.loginInfoForm.controls.username.value
    }
    
    const response = await this._userService.validateRegisterForm(body)
    
    
    if (response.err) {
      
      console.log(response.msg);
      
      this.usernameOrIsraeliIdTakenValues = body;
      
      return;
      
    }
    
    const formValues = {
      ...body,
      password: this.loginInfoForm.controls.password.value
    }

    this.nextStepFn(formValues, true);

  }

}
