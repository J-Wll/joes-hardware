import React from 'react'

export default function BasketTotalLabel({ label, value }: { label: string, value: string }) {
    return (
        <div className="flex justify-between font-semibold p-2 py-1">
            <span>{label}</span>
            <span>{value}</span>
        </div>
    )
}
