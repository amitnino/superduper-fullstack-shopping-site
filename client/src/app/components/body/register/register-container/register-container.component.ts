import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-container',
  templateUrl: './register-container.component.html',
  styleUrls: ['./register-container.component.css']
})
export class RegisterContainerComponent implements OnInit {
  
  @ViewChild('stepper') stepper: MatStepper;
  
  constructor(
    public router: Router,

  ) { 
  }

  ngOnInit(): void {
  }

  public nextStep = () => {
    this.stepper.next()
  }


  public firstStepValid: boolean = false;
  public secondStepValid: boolean = false;

  public setFirstStepToCompleted = () =>{

    this.firstStepValid = true;

  };
  public setSecondStepToCompleted = () =>{

    this.secondStepValid = true;

  };

}
