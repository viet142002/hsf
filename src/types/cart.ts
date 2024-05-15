import { Product } from '~/types/product';

interface IItems {
    quantity: number;
    product: Product;
}

export interface Cart {
    items: Array<IItems>;
    totalPrice: number;
    totalItems: number;
}
