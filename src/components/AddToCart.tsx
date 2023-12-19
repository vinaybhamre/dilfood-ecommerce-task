"use client";

import { cartActions } from "@/redux/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Button } from "@nextui-org/react";
import React from "react";
import { toast } from "react-toastify";
import { Product } from "./ProductCard";

const AddToCart = ({ product }: { product?: Product }) => {
  const dispatch = useAppDispatch();

  const addToCart = (event: React.MouseEvent) => {
    event.preventDefault();
    if (product) {
      dispatch(
        cartActions.addItem({
          id: product.id,
          productName: product.productName,
          price: product.price,
          imgUrl: product.imgUrl,
        }),
      );
    }

    toast.success("Product added successfully");
  };
  return (
    <Button
      variant="bordered"
      onClick={addToCart}
      className=" text-red-600 border-red-500 hover:bg-red-700 hover:text-white hover:opacity-100"
    >
      Add to cart
    </Button>
  );
};

export default AddToCart;
