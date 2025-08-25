import Catalogue from "@/app/ui/catalogue";
import Search from "@/app/ui/search";
import Filters from "@/app/ui/filters";

export default async function Home(
    query?: Promise<{
        searchParams?: string;
        filterParams?: string;
    }>) {

  const params = await query || {};
  const searchParams = await params.searchParams || "";
  const filterParams = await params.filterParams || "";

  return (
    <>
      <main className="flex w-full flex-col p-6 lg:p-8">
        {/* <h2 className="text-xl">On this main catalogue page, please use the search and filters provided</h2> */}

        <Filters />
        <Search placeholder="Search..."/>
        <Catalogue searchParams={searchParams} filterParams={filterParams} />


      </main>
    </>
  );
}
