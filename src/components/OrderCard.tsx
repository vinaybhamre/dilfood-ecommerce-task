"use client";

import { ProductType, cartActions } from "@/redux/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Divider, Image, Input } from "@nextui-org/react";
import { X } from "lucide-react";
import NextImage from "next/image";
import React from "react";

const OrderCard = ({ product }: { product: ProductType }) => {
  const dispatch = useAppDispatch();

  const deleteProduct = (productId: string) => {
    dispatch(cartActions.deleteItem(productId));
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      cartActions.changeQuantity({
        id: product.id,
        quantity: Number(event.target.value),
      }),
    );
  };
  return (
    <>
      <div className=" flex gap-4 w-full h-40 pt-2">
        <div>
          <Image
            as={NextImage}
            src={product.imgUrl}
            alt={product.productName}
            width={150}
            height={100}
            className=" bg-white object-contain"
          />
        </div>
        <div className=" flex flex-grow justify-between">
          <div className=" space-y-4">
            <p className=" text-2xl">{product.productName}</p>
            <p className=" text-xl">${product.price}</p>
            <p>Total price: ${product.totalPrice}</p>
          </div>
          <div className=" flex flex-col justify-between">
            <div className=" flex gap-4">
              <Input
                variant="bordered"
                className=" w-20 border-slate-900 cursor-pointer"
                type="number"
                size="sm"
                radius="sm"
                value={String(product.quantity)}
                placeholder="1"
                onChange={handleQuantityChange}
              />
              <X
                className=" cursor-pointer"
                onClick={() => deleteProduct(product.id)}
              />
            </div>
          </div>
        </div>
      </div>
      <Divider className=" bg-slate-950" />
    </>
  );
};

export default OrderCard;
