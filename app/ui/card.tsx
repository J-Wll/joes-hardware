import Image from "next/image"
import Link from "next/link"

import { Product } from "@/app/types/product"
import StockStatus from "@/app/ui/stock-status"
import BasketProductManage from "@/app/ui/basket-product-manage";

export default function Card({ product }: { product: Product }) {
    return (
        <div className="flex flex-col border border-gray-200 rounded-lg max-w-35 md:max-w-50 lg:max-w-71 xl:max-w-80 text-center p-2 min-h-105 justify-between ">
            <div>
                <Link href={`/product/${product.sku}`} aria-label={`View details for ${product.name}`}>
                    <Image
                        src={`${product.image}`}
                        width={300}
                        height={300}
                        alt={`Image of ${product.name}`}
                        className="mb-4 max-h-300 aspect-square" />
                </Link>
                <hr className="mb-4" />
                <h3 className="text-lg mb-1">{product.name}</h3>
                <ul>
                    <li>SKU: {product.sku}</li>
                    <li>Category: {product.category}</li>
                    <li>Price: £{product.price.toFixed(2)}</li>
                    <li>Stock: {product.stock}</li>
                    <li>Stock status: <StockStatus status={product.status} /></li>
                </ul>
            </div>
            <BasketProductManage product={product} />

        </div>


    )
}