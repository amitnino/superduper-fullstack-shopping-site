import { Component } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user/user-interface';
import { UserService } from 'src/app/services/user/user.service';
import pdfMake from "../../../../../../../node_modules/pdfmake";
import pdfFonts from "../../../../../../../node_modules/pdfmake/build/vfs_fonts";
import { Router } from '@angular/router';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent {

  constructor(
    private _userService: UserService,
    private router: Router,

  ) {
  };

  public generatePdfDownload = (): void => {

    const documentDefinition = this.getDocumentDefinition();
    pdfMake.createPdf(documentDefinition).open();
    this._userService.recieptReady = false;
    this.router.navigateByUrl('/welcome');

  };

  public getDocumentDefinition = (): any => {
    return {
      content: [
        {
          text: 'INVOICE',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        {
          text: 'SUPERDUPER BREWERY',
          style: 'headerBig'
        },
        {
          columns: [
            [{
              text: this.User.fullName,
              style: 'name'
            },
            {
              text: `${this.User.street}, ${this.User.city}`
            },
            {
              text: 'Email : ' + this.User.username,
            },
            {
              text: 'Israeli Id : ' + this.User._id,
            },
            ],
            []
          ]
        },
        {
          text: 'Purchased Items',
          style: 'header'
        },
        this.getCartItemsObject(this.Order.cartId.cartItems),
        {
          columns: [
            {
              text: 'Total Order Price:',
              style: 'headerLeft'
            },
            {
              text: this.Order.cartId.totalPrice,
              style: 'headerRight'
            }
          ]
        },
        {
          text: 'Thank you for being our Drinking Buddies!',
          style: 'header'
        },
        {
          text: 'Feel free to come back soon!'
        },
        {
          text: 'SuperDuper Brewry',
          style: 'sign'
        },
      ],
      info: {
        title: '_INVOICE_SuperDuperBrewry_' + this.Order._id,
        author: 'INVOICE',
        subject: 'INVOICE',
        keywords: 'INVOICE',
      },
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 20, 0, 10],
          decoration: 'underline'
        },
        headerBig: {
          fontSize: 24,
          bold: true,
          decoration: 'underline',
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        headerLeft: {
          fontSize: 18,
          bold: true,
          margin: [0, 20, 0, 10],
          alignment: 'left',
        },
        headerRight: {
          fontSize: 18,
          bold: true,
          margin: [0, 20, 0, 10],
          alignment: 'right',
        },
        name: {
          fontSize: 16,
          bold: true
        },
        jobTitle: {
          fontSize: 14,
          bold: true,
          italics: true
        },
        sign: {
          margin: [0, 50, 0, 10],
          alignment: 'right',
          italics: true
        },
        tableHeader: {
          bold: true,
        }
      }
    };
  }
  
  get User(): UserInterface {
    return this._userService.user;
  };

  get Order(): any {
    return this._userService.order;
  };

  get CartItems(): any {
    return this.Order.cartId.cartItems;
  };


  public getCartItemsObject = (cartItems: any[]): any => {
    return {
      table: {
        widths: ['*', '*', '*', '*'],
        body: [
          [{
            text: 'Name',
            style: 'tableHeader'
          },
          {
            text: 'Price per',
            style: 'tableHeader'
          },
          {
            text: 'Amount',
            style: 'tableHeader'
          },
          {
            text: 'Total Price',
            style: 'tableHeader'
          },
          ],
          ...cartItems.map(cartItem => {
            const storeItem = cartItem.storeItemId;
            return [storeItem.name, storeItem.price, cartItem.amount, cartItem.totalPrice];
          })
        ]
      }
    };
  }
};