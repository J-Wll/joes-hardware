'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Search({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();

    return (
        <>
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                className="block w-full rounded-lg border border-gray-200 py-3 px-5 lg:px-8 outline-1 mt-2 mb-6 placeholder:text-gray-500"
                placeholder={placeholder}
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={searchParams.get('query')?.toString()}
            />
        </>
    )
}