import products from "@/app/data/products.json";

export function GET() {
  try {
    return Response.json(products);
  }
  catch (error) {
    return new Response(`Failed to fetch products. Error: ${error}`, { status: 500 });
  }
}