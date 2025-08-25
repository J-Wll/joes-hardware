import Card from "@/app/ui/card";
import { getAllProducts } from "@/app/lib/data";
import { Product } from "@/app/types/product";

export default async function Catalogue({ searchParams, filterParams }: { searchParams: string, filterParams: string }) {
    const products: Array<Product> = await getAllProducts();
    return (
        <div className="flex flex-wrap gap-6 justify-center">
            {products.map((p) => (
                <Card key={p.sku} content={p} />
            ))}
        </div>
    )
}