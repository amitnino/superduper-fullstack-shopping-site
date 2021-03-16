import { OrderInterface } from './../order/order-interface';

export interface UserInterface {
    _id?: string,
    username: string,
    firstName?: string,
    lastName?: string,
    fullName: string,
    isAdmin: boolean,
    city: string,
    street: string,
    lastOrder: OrderInterface,
    numberOfOrders: number
}
