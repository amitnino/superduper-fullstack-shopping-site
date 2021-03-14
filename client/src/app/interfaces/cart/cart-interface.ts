import { CartItemInterface } from "./cart-item-interface";

export interface CartInterface {
    _id: string,
    userId: string,
    totalPrice: number,
    isActive: boolean,
    createdAt: Date,
    updatedAt: Date,
    cartItems: CartItemInterface[]
}
