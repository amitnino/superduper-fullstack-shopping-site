import { CartInterface } from "../cart/cart-interface";
import { StoreItemInterface } from '../store/store-item-interface';
import { StoreCategoryInterface } from '../store/store-category-interface';
import { StatisticsInterface } from './../order/statistics-interface';
import { OrderInterface } from './../order/order-interface';

export interface ApiResponseInterface {
    err: boolean,
    msg?: string,
    status: number,
    unAuth?: boolean,
    loginToken?: string,
    cart?: CartInterface,
    storeItem?: StoreItemInterface,
    storeItems?: StoreItemInterface[],
    storeCategory?: StoreCategoryInterface,
    statistics?: StatisticsInterface,
    order?: OrderInterface,
    unAvailableDates: string[]
};
