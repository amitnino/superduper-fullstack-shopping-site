import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-personal-info-form',
  templateUrl: './personal-info-form.component.html',
  styleUrls: ['./personal-info-form.component.css']
})
export class PersonalInfoFormComponent implements OnInit {

  @Input()
  nextStepFn: any;

  public personalInfoForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public _userService: UserService,
    
  ) { }

  ngOnInit(): void { 
    this.personalInfoForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      city: ['', [Validators.required]],
      street: [{value:'', disabled: true}, [Validators.required]],
    })
  }

  public toggleStreetInputOnCitySelection = () => {

    this.cityControl.invalid ? this.streetControl.disable() : this.streetControl.enable();
  
  }

  get firstNameControl() {
    return this.personalInfoForm.controls['firstName'];
  }
  get lastNameControl() {
    return this.personalInfoForm.controls['lastName'];
  }
  get cityControl() {
    return this.personalInfoForm.controls['city'];
  }
  get streetControl() {
    return this.personalInfoForm.controls['street'];  
  }

  public validateFormButton = async (): Promise<void> => {

    if (this.personalInfoForm.invalid) {

      console.log('Form is invalid');
      
      return;

    }

    this.nextStepFn(this.personalInfoForm.value);

  }

}
