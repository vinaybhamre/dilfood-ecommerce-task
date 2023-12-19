"use client";

import OrderSummary from "@/components/OrderSummary";
import { cartActions } from "@/redux/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const Checkout = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Order placed successfully");

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      dispatch(cartActions.clearCart());
      router.push("/thanks");
    } finally {
      router.push("/thanks");
    }
  };

  return (
    <div className=" min-h-screen">
      <div className=" my-20 w-full max-w-5xl mx-auto">
        <p className=" text-2xl">Checkout Order</p>
        <div className=" grid grid-cols-3 gap-10">
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col col-span-2 max-w-xl gap-8"
          >
            <div className=" flex gap-4 ">
              <Input type="email" variant="underlined" label="Email" />
              <Input type="tel" variant="underlined" label="Phone" />
            </div>
            <div className=" flex gap-4">
              <Input type="text" variant="underlined" label="First Name" />
              <Input type="text" variant="underlined" label="Last Name" />
            </div>
            <div>
              <Textarea
                label="Address"
                variant="underlined"
                placeholder="Enter your address"
                className=""
              />
            </div>
            <div className=" flex gap-4 ">
              <Input type="text" variant="underlined" label="Card Number" />
            </div>
            <div className=" flex gap-4">
              <Input type="text" variant="underlined" label="Expiry Month" />
              <Input type="text" variant="underlined" label="Expiry Year" />
              <Input type="text" variant="underlined" label="CVV" />
            </div>
            <div className=" flex gap-4">
              <Input type="text" variant="underlined" label="Country" />
              <Input type="text" variant="underlined" label="Zip Code" />
            </div>
            <div>
              <Button
                type="submit"
                variant="ghost"
                color="danger"
                className=" w-full"
              >
                {" "}
                Place Order
              </Button>
            </div>
          </form>
          <div className=" col-span-1">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
