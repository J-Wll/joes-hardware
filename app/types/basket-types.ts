import { Product } from "./product";

export type BasketItem = {
  sku: string;
  name: string;
  quantity: number;
  price: number;
  installation_cost?: number;
  stock?: number;
};

export type BasketContextType = {
  items: BasketItem[];
  addItem: (item: BasketItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearBasket: () => void;
  toBasketItem: (product: Product, quantity: number) => BasketItem;
  reduceItem: (item: BasketItem) => void;
};