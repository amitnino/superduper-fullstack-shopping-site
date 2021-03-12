import { Component, OnInit, Input } from '@angular/core';
import { MatHorizontalStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-personal-info-form',
  templateUrl: './personal-info-form.component.html',
  styleUrls: ['./personal-info-form.component.css']
})
export class PersonalInfoFormComponent implements OnInit {

  @Input()
  setSecondStepToCompleted;

  constructor() { }

  ngOnInit(): void {
    
  }

}
