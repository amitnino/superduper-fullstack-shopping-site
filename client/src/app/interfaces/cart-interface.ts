import { CartItemInterface } from "./cart-item-interface";

export interface CartInterface {
    _id: string,
    totalPrice: number,
    isActive: boolean,
    createdAt: Date,
    updatedAt: Date,
    cartItems: CartItemInterface[]
}
