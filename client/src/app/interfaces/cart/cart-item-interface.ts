import { StoreItemInterface } from "../store/store-item-interface";

export interface CartItemInterface {
    _id: string,
    totalPrice: number,
    amount: number,
    storeItemId: StoreItemInterface
}
