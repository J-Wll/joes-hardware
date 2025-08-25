
export async function getAllProducts() {
    // mock api call
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
    return await res.json()
}