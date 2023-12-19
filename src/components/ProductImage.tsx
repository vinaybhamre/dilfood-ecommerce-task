"use client";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import React from "react";

const ProductImage = ({
  imgUrl,
  productName,
}: {
  imgUrl: string;
  productName: string;
}) => {
  return (
    <Image
      as={NextImage}
      width={300}
      height={300}
      alt={productName}
      className="w-full object-contain bg-white h-60 rounded-none transition-opacity opacity-0 duration-[2s]"
      src={imgUrl}
      placeholder="blur"
      blurDataURL={imgUrl}
      onLoadingComplete={(image: any) => {
        image?.classList?.remove("opacity-0");
      }}
    />
  );
};

export default ProductImage;
