'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';


export default function Filters() {
    const filterParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const params = new URLSearchParams(filterParams);

    const categoryDefault = filterParams.get('category') || "all";
    const stockDefault = filterParams.get('stock') || "all";
    const minPriceDefault = filterParams.get('minPrice') || "1";
    const maxPriceDefault = filterParams.get('maxPrice') || "100";
    const spacing = "mb-3 sm:mb-0";

    const handleFilter = ((type: string, value: string) => {
        params.set(type, value);
        replace(`${pathname}?${params.toString()}`);
    })

    // only updates once every 100ms for price inputs
    const handlePriceFilter = useDebouncedCallback((type: string, value: string) => {
        params.set(type, value);
        replace(`${pathname}?${params.toString()}`);
    }, 300)

    const resetFilters = () => {
        params.delete('category');
        params.delete('stock');
        params.delete('minPrice');
        params.delete('maxPrice');
        replace(`${pathname}?${params.toString()}`);
        window.location.href = `${pathname}?${params.toString()}`;
    }

    return (
        <div className="w-full flex flex-row flex-wrap mb-6 justify-center text-center items-center">
            <select className={`mr-4 ${spacing}`} defaultValue={categoryDefault} onChange={(e) => { handleFilter('category', e.target.value) }}>
                <option value="" disabled>Filter by category</option>
                <option value="All">All categories</option>
                <option value="Tools">Tools</option>
                <option value="Timber">Timber</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Electrical">Electrical</option>
                <option value="Garden">Garden</option>
                <option value="Paint">Paint</option>
            </select>

            <select className={`mr-4 ${spacing}`} defaultValue={stockDefault} onChange={(e) => { handleFilter('stock', e.target.value) }}>
                <option value="" disabled>Filter by category</option>
                <option value="All">All stock levels</option>
                <option value="In Stock">In Stock</option>
                <option value="Low Stock">Low Stock</option>
                <option value="Out of Stock">Out of Stock</option>
            </select>

            <label htmlFor='minPrice' className={`${spacing}`}>Min price £ </label>
            <input type="number" id="minPrice" className={`w-12 mr-4 border rounded-lg pl-1 ml-1 text-sm h-6 text-center ${spacing}`} defaultValue={minPriceDefault} onChange={(e) => { handlePriceFilter('minPrice', e.target.value) }} />
            <label htmlFor='maxPrice' className={`${spacing}`}>Max price £ </label>
            <input type="number" id="maxPrice" className={`w-12 mr-4 border rounded-lg pl-1 ml-1 text-sm h-6 text-center ${spacing}`} defaultValue={maxPriceDefault} onChange={(e) => { handlePriceFilter('maxPrice', e.target.value) }} />

            <button className='border rounded-lg px-1 text-sm h-6 text-center cursor-pointer' onClick={resetFilters}>Reset Filters</button>

        </div >
    )
}