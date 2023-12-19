"use client";

import { useAppSelector } from "@/redux/hooks";
import { Button, Card, CardBody, CardFooter, Divider } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const OrderSummary = () => {
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);

  const totalAmount = useAppSelector((state) => state.cart.totalAmount);

  const pathname = usePathname();

  return (
    <Card className=" p-4 border border-slate-800">
      <CardBody>
        <h2 className=" text-xl pb-5">Order Summary</h2>
        <div className=" flex items-center justify-between">
          <p> Total Items</p>
          <p className=" font-semibold">{totalQuantity}</p>
        </div>
        <Divider className="my-4 bg-slate-950" />
        <div className=" flex items-center justify-between">
          <p>Subtotal</p>
          <p className=" font-semibold">${totalAmount}</p>
        </div>
        <Divider className="my-4 bg-slate-950" />
        <div className=" flex items-center justify-between">
          <p>Shipping</p>
          <p className=" font-semibold">${0}</p>
        </div>
        <Divider className="my-4 bg-slate-950" />
        <div className=" flex items-center justify-between">
          <p>Order Total</p>
          <p className=" font-semibold">${totalAmount}</p>
        </div>
      </CardBody>
      <CardFooter>
        {pathname === "/cart" && totalQuantity > 0 ? (
          <div className="w-full flex flex-col gap-5 ">
            <Button color="success" className=" text-white text-xl">
              <Link href="/checkout">Checkout</Link>
            </Button>
            <Button color="primary" className=" text-base">
              <Link href="/">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="w-full flex flex-col gap-5 ">
            <Button color="primary" className=" text-base">
              <Link href="/">Continue Shopping</Link>
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default OrderSummary;
