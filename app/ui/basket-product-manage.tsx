
"use client";
import { useBasket } from "@/app/contexts/basket-context";
import { Product } from "@/app/types/product";
import clsx from "clsx";

export default function BasketItemManage({ product }: { product: Product }) {
    const { items, addItem, reduceItem, toBasketItem } = useBasket();
    const basketItem = toBasketItem(product, 1);

    const currentQuantity = items.find((i) => i.sku === product.sku)?.quantity ?? 0;

    const canAdd = product.stock > currentQuantity;
    const canRemove = currentQuantity > 0;

    const addButton = clsx(
        "text-white px-4 py-2 rounded cursor-pointer transition",
        {
            "bg-gray-500": !canAdd,
            "bg-blue-500 hover:bg-blue-600": canAdd
        }
    );

    const removeButton = clsx(
        "text-white px-4 py-2 rounded cursor-pointer transition",
        {
            "bg-gray-500": !canRemove,
            "bg-red-500 hover:bg-red-600": canRemove
        }
    );

    return (
        <div className="flex flex-row justify-between my-3 w-full ">
            <button disabled={!canRemove} aria-label={`Remove a ${product.name} from the basket`} className={`${removeButton}`} onClick={() => reduceItem(basketItem)}>-</button>
            <button disabled={!canAdd} aria-label={`Add a ${product.name} to basket`} onClick={() => addItem(basketItem)} className={`${addButton} `}>
                +
            </button>

        </div>
    )
}