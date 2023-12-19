import { Button } from "@nextui-org/react";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

const ThankYou = () => {
  return (
    <div className=" min-h-screen">
      <div className="px-4 pt-20 text-center">
        <h1 className="text-4xl font-extrabold tracking-normal">
          Thank you for your order
        </h1>
        <p className=" mx-auto max-w-3xl mt-4 text-base">
          Please check your email for details
        </p>
      </div>
      <div>
        <div className="flex flex-col justify-center items-center gap-10">
          <ShoppingCart width={100} height={100} />
          <Button variant="solid" className=" bg-red-600 text-white">
            <Link href="/">Shop Again</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
