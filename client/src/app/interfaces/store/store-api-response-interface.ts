import { StoreCategoryInterface } from "./store-category-interface";
import { StoreItemInterface } from "./store-item-interface";

export interface StoreApiResponseInterface {

    err: boolean,
    msg?: string,
    storeCategories?: StoreCategoryInterface[],
    storeItems?: StoreItemInterface[],
    storeItem?: StoreItemInterface

}
