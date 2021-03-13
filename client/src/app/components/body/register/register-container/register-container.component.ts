import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register-container',
  templateUrl: './register-container.component.html',
  styleUrls: ['./register-container.component.css']
})
export class RegisterContainerComponent implements OnInit {

  @ViewChild('stepper') stepper: MatStepper;

  constructor(
    public router: Router,
    public _userService: UserService,

  ) {}

  ngOnInit(): void {
  }

  public registerationForm: any = {};

  public firstStepValid: boolean = false;
  public secondStepValid: boolean = false;

  public registrationSuccessful: boolean = false;
  public thirdStepMessage: string;

  public resetForm = (): void => {

    window.location.reload();

  }

  public nextStepFn = async (formValues: any, firstStep: boolean = false) => {

    this.stepper.selected.completed = true;
    this.registerationForm = { ...this.registerationForm, ...formValues };

    if (!firstStep) {

      const response = await this._userService.registerUser(this.registerationForm);

      this.thirdStepMessage = response.msg;

    };

    this.stepper.next();

  };
};

