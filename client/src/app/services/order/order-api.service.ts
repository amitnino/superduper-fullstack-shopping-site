import { Injectable } from '@angular/core';
import { OrderInterface } from 'src/app/interfaces/order-interface';

@Injectable({
  providedIn: 'root'
})
export class OrderApiService {

  public cityList = [

    'Jerusalem',
    'Tel Aviv',
    'Haifa',
    'Ashdod',
    'Rishon LeZiyon',
    'Petah Tikva',
    'Beersheba',
    'Netanya',
    'Holon',
    'Bnei Brak',
    'Rehovot',
    'Bat Yam'

  ]

  constructor() { }

  // - getAllOrdersApi()
  // - getOrdersByUserIdApi()
  // - createNewOrderApi()

  public orders: OrderInterface[] =[
    {
      _id: 'id1',
      city: 'city',
      street: 'street',
      delieveryDate: new Date(),
      creditCard: 123,
      cartId: 'id1',
      userId: 'id1',
    },
    {
      _id: 'id2',
      city: 'city',
      street: 'street',
      delieveryDate: new Date(Date.now()+1000000),
      creditCard: 456,
      cartId: 'id1',
      userId: 'id1',
    },
  ]

}
