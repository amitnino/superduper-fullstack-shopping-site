import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(
    private _snackBar: MatSnackBar,

  ) { }

  public openSnackBar = (message: string): void => {

    this._snackBar.open(message, 'dismiss', {duration: 2500});

  };
};
