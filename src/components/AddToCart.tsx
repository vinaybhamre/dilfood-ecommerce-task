"use client";

import { cartActions } from "@/redux/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Button } from "@nextui-org/react";
import React from "react";
import { Product } from "./ProductCard";

const AddToCart = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: product.id,
        productName: product.productName,
        price: product.price,
        imgUrl: product.imgUrl,
      }),
    );

    // toast.success("Product added successfully");
  };
  return (
    <Button color="primary" variant="ghost" onClick={addToCart}>
      Add to cart
    </Button>
  );
};

export default AddToCart;
