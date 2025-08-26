export type Product = {
    sku: string;
    name: string;
    category: string;
    price: number;
    stock: number;
    status: string;
    image: string;
    installation_cost?: number;
}