import Catalogue from "./ui/catalogue";
import Search from "./ui/search";
import Filters from "./ui/filters";
// import products from "./api/products";

export default function Home() {
  return (
    <>
      <main className="flex w-full align-middle justify-center">
        {/* <h2 className="text-xl">On this main catalogue page, please use the search and filters provided</h2> */}

        <Search />
        <Filters />
        <Catalogue />

      </main>
    </>
  );
}
