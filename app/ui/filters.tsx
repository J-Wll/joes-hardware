export default function Filters() {
    return (
        <div className="w-full flex flex-row mb-6 justify-center">
            <select className="mr-4" defaultValue="all">
                <option value="" disabled>Filter by category</option>
                <option value="all">All categories</option>
                <option value="tools">Tools</option>
                <option value="hardware">Hardware</option>
                <option value="appliances">Appliances</option>
                <option value="outdoors">Outdoors</option>
            </select>

            <select className="mr-4" defaultValue="all">
                <option value="" disabled>Filter by category</option>
                <option value="all">All stock levels</option>
                <option value="in">In Stock</option>
                <option value="low">Low Stock</option>
                <option value="out">Out of Stock</option>
            </select>

            <label>Min price £ </label>
            <input type="number" className="w-12 mr-4 border rounded-lg pl-1 ml-1" defaultValue={1} />
            <label>Max price £ </label>
            <input type="number" className="w-12 border rounded-lg pl-1 ml-1" defaultValue={100} />

        </div >
    )
}