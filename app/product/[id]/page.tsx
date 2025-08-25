import React from 'react';
import { Product } from '@/app/types/product';
import Image from 'next/image';
import Link from 'next/link';
import { StockStatus } from '@/app/ui/stock-status';

export default async function page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/single_product?id=${id}`);
    const product: Product = await res.json();
    return (
        <>

            <main className='p-10 sm:p-12 md:p-8'>
                <Link href={"/"} className='text-blue-400 underline mb-4'>Home</Link>
                <span> / </span>
                <span className='underline'>{id}</span>

                <div className='flex w-full flex-col md:flex-row mt-3'>
                    <div className='flex flex-col items-center max-w-100 border border-gray-200 mr-10 mb-10 md:mb-0'>
                        <Image
                            src={product.image}
                            alt={`Image of ${product.name}`}
                            width={400}
                            height={400}
                            className="mb-4 min-w-100" />
                        <h2 className='text-xl'> {product.name} </h2>
                    </div>
                    <div>
                        <p>SKU: {product.sku}</p>
                        <p>Category: {product.category}</p>
                        <p>Price: £{product.price.toFixed(2)}</p>
                        <p>Stock: {product.stock}</p>
                        <p>Stock status: <StockStatus status = {product.status}/></p>
                        <br />
                        <p className='max-w-250'>Lorem ipsum dolor sit amet. Qui consectetur optio sit omnis perspiciatis eos voluptatem nobis in maxime nobis non consequatur numquam sed dolore quisquam At quia autem. Et internos eius ea voluptas doloribus ut voluptas nihil. Et rerum autem est animi provident qui alias libero in similique nobis.
                            Et aliquam aliquid qui dolorem consequatur aut enim dolore aut Quis possimus et iure quos. Sit aliquid impedit id provident doloremque ea atque commodi cum facere similique et ipsam molestiae aut facere doloribus. Vel animi dolores rem praesentium eligendi qui praesentium vero sed ipsa impedit aut molestiae saepe ut quidem iure.
                        </p>

                    </div>
                </div>
            </main>
        </>
    )
}
