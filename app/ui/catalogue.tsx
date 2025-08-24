import Card from "@/app/ui/card";

export default function Catalogue({ products }: { products: Array<any> }) {
    return (
        <div className="flex flex-wrap gap-6 justify-center">
            {products.map((p) => (
                <Card key={p.sku} content={p} />
            ))}
        </div>
    )
}