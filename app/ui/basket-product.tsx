"use client";
import React from 'react'
import { BasketItem } from '@/app/types/basket-types'
import { useBasket } from '@/app/contexts/basket-context';

export default function BasketProduct({ product }: { product: BasketItem }) {
    const { removeItem, updateQuantity } = useBasket();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value >= 0 && value <= product.stock) {
            updateQuantity(product.sku, value);
        }
    };

    return (
        <div className='w-full border border-gray-100 p-2 flex flex-row items-center justify-between'>
            <input
                type="number"
                min={0}
                value={product.quantity}
                onChange={handleChange}
                className="border border-gray-300 p-1 mr-2 w-13 text-center"
                aria-label={`Change quantity of ${product.name} in basket`}
            />
            <span className='flex-1'>{product.name}</span>
            <span className='border border-gray-300 p-2 mr-2 min-w-17 '>£{(product.price * product.quantity).toFixed(2)}</span>
            <button className='cursor-pointer bg-gray-100 p-2 border border-gray-600' aria-label={`Remove ${product.name} from basket`} onClick={() => { removeItem(product.sku) }}>X</button>
        </div>
    )
}
