import Image from "next/image"
import Link from "next/link"
import { Product } from "@/app/types/product"
import { StockStatus } from "./stock-status"

export default function Card({ content }: { content: Product }) {
    return (
        <div className="display-flex flex-col border border-gray-200 rounded-lg max-w-35 md:max-w-50 lg:max-w-71 xl:max-w-80 text-center p-2 min-h-105 align-middle justify-center">
            <Link href={`/product/${content.sku}`} aria-label={`View details for ${content.name}`}>
                <Image
                    src={`${content.image}`}
                    width={300}
                    height={300}
                    alt={`Image of ${content.name}`}
                    className="mb-4 max-h-300 aspect-square" />
            </Link>
            <hr className="mb-4" />
            <h3 className="text-lg mb-1">{content.name}</h3>
            <ul>
                <li>SKU: {content.sku}</li>
                <li>Category: {content.category}</li>
                <li>Price: £{content.price.toFixed(2)}</li>
                <li>Stock: {content.stock}</li>
                <li>Stock status: <StockStatus status={content.status}/></li>
            </ul>
        </div>
    )
}