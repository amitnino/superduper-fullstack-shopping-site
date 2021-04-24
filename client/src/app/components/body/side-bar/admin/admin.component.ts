import { Component, OnInit } from '@angular/core';
import { AdminStoreService } from './../../../../services/store/admin-store.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from 'src/app/services/store/store.service';
import { StoreItemInterface } from 'src/app/interfaces/store/store-item-interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public showForm: boolean

  public adminForm: FormGroup;
  public isEdit: boolean = false;
  public _id: string;
  

  constructor(
    public _storeService: StoreService,
    public _adminStoreService: AdminStoreService,
    private formBuilder: FormBuilder,

  ) {};

  ngOnInit():void{
    this.adminForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      categoryId: ['', [Validators.required]],
      price: [1, [Validators.required]],
      picture: ['', [Validators.required]]
    });

    this._adminStoreService.storeItemEditModeObserveable.subscribe(storeItem => {

      this.toggleFormMode(true, storeItem);

    });
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

  public toggleFormMode = (isEdit: boolean, storeItem?: StoreItemInterface ): void => {

    this.isEdit = isEdit;

    if (!isEdit) {
      
      this.adminForm.reset();

    } else {

      const { _id, name, price, picture, categoryId } = storeItem;

      this._id = _id;

      this.adminForm.setValue({ name, price, picture, categoryId });

    };

  };

  public submitForm = async (): Promise<void> => {

    if ( this.adminForm.invalid ) return ;

    const body: StoreItemInterface = this.adminForm.value;

    if ( this.isEdit ) {

      body._id = this._id;

    };

    await this._storeService.addOrEditItemToStore(body, this.isEdit);

  };

  public addButtonClick = (): void => {

    this.toggleFormMode(false);

  };
};
