import { Product } from "@/app/types/product";
import { CatalogueParams } from "@/app/types/catalogue-params";

export async function getAllProducts() {
    // mock api call
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`
    );
    return await res.json()
}

export function processProducts(products: Array<Product>, params: CatalogueParams) {
    return products.filter((p) => {
        if (params.search) {
            const searchLower = params.search.toLowerCase();
            const nameMatch = p.name.toLowerCase().includes(searchLower);
            const skuMatch = p.sku.toLowerCase().includes(searchLower);
            if (!nameMatch && !skuMatch) {
                return false;
            }
        }

        if (params.category && (params.category != "All" && p.category !== params.category)) return false;
        if (params.stock && (params.stock != "All" && params.stock !== p.status)) return false;
        if (params.minPrice !== undefined && p.price < params.minPrice) return false;
        if (params.maxPrice !== undefined && p.price > params.maxPrice) return false;

        return true;
    });
}