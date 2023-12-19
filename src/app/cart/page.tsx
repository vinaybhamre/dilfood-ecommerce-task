"use client";

import OrderCard from "@/components/OrderCard";
import OrderSummary from "@/components/OrderSummary";
import { useAppSelector } from "@/redux/hooks";
import { Button, Card, CardBody, CardFooter, Divider } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);

  return (
    <div className=" min-h-screen">
      <div className="px-4 pt-20 text-center">
        <h1 className="text-4xl font-extrabold tracking-normal">Cart</h1>
        <p className=" mx-auto max-w-3xl mt-4 text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div>
        <main className=" my-20 mx-auto max-w-6xl px-6">
          <div className=" grid grid-cols-3 gap-10">
            <div className=" flex flex-col gap-4  col-span-2">
              {totalQuantity > 0 ? (
                cartItems.map((item) => (
                  <OrderCard key={item.id} product={item} />
                ))
              ) : (
                <p className=" text-3xl text-center">Your cart is empty</p>
              )}
            </div>
            <div className=" col-span-1">
              <OrderSummary />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Cart;
