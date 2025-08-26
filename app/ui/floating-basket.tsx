"use client";

import { useState } from "react";
import { useBasket } from "@/app/contexts/basket-context";
import BasketProduct from "@/app/ui/basket-product";

export default function FloatingBasket() {
    const { items, clearBasket } = useBasket();
    const [isOpen, setIsOpen] = useState(true);

    if (items.length === 0) return null; // hide basket if empty

    const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
    const deliveryCost = subtotal > 100 ? 0 : 4.99;
    const totalInstallationCost = items.reduce((total, item) => item.installation_cost ? total + item.installation_cost * item.quantity : total, 0)
    const totalWithInstallation = (subtotal + totalInstallationCost + deliveryCost);
    const totalWithoutInstallation = (subtotal + deliveryCost);
    const delivery = deliveryCost === 0 ? "Free" : "£4.99";


    return (
        <div className="fixed bottom-4 right-4 z-50 w-80 md:w-96 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden flex flex-col">

            {/* header */}
            <div className="flex justify-between items-center px-4 py-2 bg-gray-100 border-b border-gray-300 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <span className="font-semibold">Basket ({items.length})</span>
                <button
                    className="text-sm px-2 py-1 bg-red-500 text-white rounded"
                    onClick={(e) => {
                        e.stopPropagation();
                        clearBasket();
                    }}
                >
                    Clear
                </button>
            </div>

            {/* items and totals */}
            {isOpen && (
                <div className="max-h-80 overflow-y-auto p-1 space-y-2">
                    {items.map((item) => (
                        <BasketProduct key={item.sku} product={item} />
                    ))}
                    <div>
                        <hr className="mb-2"/>
                        <div className="flex justify-between font-semibold p-2 py-1">
                            <span>Subtotal:</span>
                            <span>£{subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-semibold p-2 py-1">
                            <span>Delivery:</span>
                            <span>{delivery}</span>
                        </div>
                        <div className="flex justify-between font-semibold p-2 py-1">
                            <span>Total without installation:</span>
                            <span>£{totalWithoutInstallation.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-semibold p-2 py-1">
                            <span>Total with installation:</span>
                            <span>£{totalWithInstallation.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            )}

            {/* when minimized */}
            {!isOpen && (
                <div className="px-4 py-2 text-gray-600 text-sm cursor-pointer" onClick={() => setIsOpen(true)}>
                    Open Basket
                </div>
            )}
        </div>
    );
}
