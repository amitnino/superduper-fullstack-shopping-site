import { CartInterface } from "./cart-interface";
import { StoreItemInterface } from 'src/app/interfaces/store-item-interface';
import { StoreCategoryInterface } from './store-category-interface';

export interface ApiResponseInterface {
    err: boolean,
    msg?: string,
    loginToken?: string,
    cart?: CartInterface,
    storeItem?: StoreItemInterface,
    storeItems?: StoreItemInterface[],
    storeCategory?: StoreCategoryInterface,
}
