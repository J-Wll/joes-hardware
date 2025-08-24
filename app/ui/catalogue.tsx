import card from "@/app/ui/card";

export default function Catalogue({ products }: { products: Array<any> }) {
    return (
        <div className="catalogue">
            {products.map((p) => (
                <li key={p.sku}>{p.name}</li>
            ))}
        </div>
    )
}