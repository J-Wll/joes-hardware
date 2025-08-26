// app/page.tsx
import Catalogue from "@/app/ui/catalogue";
import Search from "@/app/ui/search";
import Filters from "@/app/ui/filters";
import { CatalogueParams } from "./types/catalogueParams";

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<CatalogueParams>;
}) {
  const params = await searchParams || {};

  return (
    <main className="flex w-full flex-col p-6 lg:p-8">
      <Filters />
      <Search placeholder="Search by name or SKU..." />
      <Catalogue params={params} />
    </main>
  );
}
