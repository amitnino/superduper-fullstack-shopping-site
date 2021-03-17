import { CartInterface } from "../cart/cart-interface";

export interface OrderInterface {
    _id?: string,
    city: string,
    street: string,
    delieveryDate: Date,
    creditCard: string,
    cartId: CartInterface | string,
    userId: string,
    createdAt?: Date,
    updatedAt?: Date,
}
