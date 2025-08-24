import Catalogue from "@/app/ui/catalogue";
import Search from "@/app/ui/search";
import Filters from "@/app/ui/filters";

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
  const products = await res.json();
  // const searchParams = await props.searchParams;
  // const filterParams = await props.filterParams;
  return (
    <>
      <main className="flex w-full flex-col p-6 lg:p-8">
        {/* <h2 className="text-xl">On this main catalogue page, please use the search and filters provided</h2> */}

        <Search placeholder="Search..."/>
        <Filters />
        <Catalogue products={products} />


      </main>
    </>
  );
}
