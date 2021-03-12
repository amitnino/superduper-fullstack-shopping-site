import { OrderInterface } from "./order-interface";

export interface UserInterface {
    _id: string,
    username: string,
    fullName: string,
    isAdmin: boolean,
    city: string,
    street: string,
    orders: OrderInterface[]
}
