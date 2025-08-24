import Card from "@/app/ui/card";
import { Product } from "@/app/types/product";

export default function Catalogue({ products }: { products: Array<Product> }) {
    return (
        <div className="flex flex-wrap gap-6 justify-center">
            {products.map((p) => (
                <Card key={p.sku} content={p} />
            ))}
        </div>
    )
}