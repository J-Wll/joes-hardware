import Card from "@/app/ui/card";
import { getAllProducts, processProducts } from "@/app/lib/data";
import { Product } from "@/app/types/product";
import { CatalogueParams } from "@/app/types/catalogue-params";

export default async function Catalogue({ params }: { params: CatalogueParams }) {
    const products: Array<Product> = await getAllProducts()
    const processedProducts = Object.keys(params).length > 0 ? processProducts(products, params) : products;

    return (
        <div className="flex flex-wrap gap-6 justify-center">
            {processedProducts.map((p) => (
                <Card key={p.sku} product={p} />
            ))}
        </div>
    )
}