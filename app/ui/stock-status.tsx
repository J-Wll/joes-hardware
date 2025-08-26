import clsx from 'clsx';

export default function StockStatus({ status }: { status: string }) {
    const statusClasses = clsx(
        'text-black',
        {
            'text-green-600': status === 'In Stock',
            'text-yellow-600': status === 'Low Stock',
            'text-red-600': status === 'Out of Stock',
        }
    );

    return (
        <span className={statusClasses}>
            {status}
        </span>
    );
}