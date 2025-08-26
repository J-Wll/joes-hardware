import React from 'react'
import { BasketItem } from '@/app/types/basket-types'

export default function BasketProduct({ product }: { product: BasketItem }) {
    return (
        <div className='w-full border border-gray-100 p-2 flex flex-row items-center justify-between'>
            <span className='border border-gray-300 p-2 mr-2'>{product.quantity}</span>
            <span className='flex-1'>{product.name}</span>
            <span className='border border-gray-300 p-2 mr-2 min-w-17 '>£{(product.price * product.quantity).toFixed(2)}</span>
        </div>
    )
}
