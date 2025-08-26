"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { BasketItem, BasketContextType } from "@/app/types/basket-types";
import { Product } from "@/app/types/product";


const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<Array<BasketItem>>([]);

    // load saved basket
    useEffect(() => {
        const stored = localStorage.getItem("basket");
        if (stored) {
            setItems(JSON.parse(stored));
        }
    }, []);

    // autosave to local storage
    useEffect(() => {
        localStorage.setItem("basket", JSON.stringify(items));
    }, [items]);

    const addItem = (item: BasketItem) => {
        setItems((prev) => {
            const existing = prev.find((i) => i.sku === item.sku);
            if (existing) {
                return prev.map((i) =>
                    i.sku === item.sku ? { ...i, quantity: i.quantity + item.quantity } : i
                );
            }
            return [...prev, item];
        });
    };

    const reduceItem = (item: BasketItem) => {
        setItems((prev) => {
            const existing = prev.find((i) => i.sku === item.sku);
            if (!existing) return prev;

            if (existing.quantity <= 1) {
                return prev.filter((i) => i.sku !== item.sku);
            }
            return prev.map((i) =>
                i.sku === item.sku ? { ...i, quantity: i.quantity - 1 } : i
            );

            return [...prev, item];
        });
    };

    const removeItem = (sku: string) => {
        setItems((prev) => prev.filter((i) => i.sku !== sku));
    };

    const updateQuantity = (sku: string, quantity: number) => {
        setItems((prev) =>
            prev.map((i) => (i.sku === sku ? { ...i, quantity } : i))
        );
    };

    const toBasketItem = ((product: Product, quantity = 1): BasketItem => {
        return {
            sku: product.sku,
            name: product.name,
            price: product.price,
            installation_cost: product.installation_cost,
            stock: product.stock,
            quantity
        }
    });


    const clearBasket = () => setItems([]);

    return (
        <BasketContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearBasket, toBasketItem, reduceItem }}>
            {children}
        </BasketContext.Provider>
    );
};

export const useBasket = () => {
    const context = useContext(BasketContext);
    if (!context) throw new Error("useBasket must be used within a BasketProvider");
    return context;
};
