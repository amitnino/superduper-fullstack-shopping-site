import { Injectable, OnInit } from '@angular/core';
import { StoreService } from './store.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreItemInterface } from 'src/app/interfaces/store/store-item-interface';

@Injectable({
  providedIn: 'root'
})
export class AdminStoreService implements OnInit {

  constructor(
    private _storeService: StoreService,
    private formBuilder: FormBuilder,

  ) { };

  public adminForm: FormGroup;
  public isEdit: boolean = false;
  public _id: string;

  ngOnInit():void{
    this.adminForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      categoryId: ['', [Validators.required]],
      price: [1, [Validators.required]],
      picture: ['', [Validators.required]]
    })
  };

  get nameControl() {
    return this.adminForm.controls['name'];
  };
  get categoryIdControl() {
    return this.adminForm.controls['categoryId'];  
  };
  get priceControl() {
    return this.adminForm.controls['price'];
  };
  get pictureControl() {
    return this.adminForm.controls['picture'];
  };

  public setInputValue = (controlName: string, controlNewValue: string): void => {

    this.adminForm.controls[controlName].setValue(controlNewValue);

  };

  public setFormValue = (newFormValue: StoreItemInterface): void => {

    this.adminForm.setValue(newFormValue);

  };

  public toggleEditMode = (isEdit: boolean, storeItem?: StoreItemInterface, ): void => {

    this.isEdit = isEdit;

    if (!isEdit) {
      
      this.adminForm.reset();

    }else {

      const {  } = storeItem;
      this.adminForm.setValue({});

    }

  };

  public submitForm = async (): Promise<void> => {

    console.log(this.adminForm.value);

    const body: StoreItemInterface = this.adminForm.value;

    if ( this.isEdit ) {

      body._id = this._id;

    };

    await this._storeService.addOrEditItemToStore(body, this.isEdit);

  };

};
