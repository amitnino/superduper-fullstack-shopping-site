import { CartInterface } from "../cart/cart-interface";
import { StoreItemInterface } from '../store/store-item-interface';
import { StoreCategoryInterface } from '../store/store-category-interface';
import { StatisticsInterface } from './../order/statistics-interface';

export interface ApiResponseInterface {
    err: boolean,
    msg?: string,
    loginToken?: string,
    cart?: CartInterface,
    storeItem?: StoreItemInterface,
    storeItems?: StoreItemInterface[],
    storeCategory?: StoreCategoryInterface,
    statistics?: StatisticsInterface
}
