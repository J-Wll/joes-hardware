import products from "@/app/data/products.json";

export function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return new Response("Product ID is required", { status: 400 });
    }

    const product = products.find((p) => p.sku === id);

    if (!product) {
      return new Response(`No product found with SKU: ${id}`, { status: 404 });
    }

    return Response.json(product);
  } catch (error) {
    return new Response(`Failed to fetch product. Error: ${error}`, { status: 500 });
  }
}
