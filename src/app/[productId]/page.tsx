"use client";

import AddToCart from "@/components/AddToCart";
import products from "@/data/products";
import { Button, Image, Link } from "@nextui-org/react";
import NextImage from "next/image";
import { useRouter } from "next/navigation";

type ProductDetailsProps = {
  params: {
    productId: string;
  };
};

const getProduct = (id: string) => {
  return products.find((product) => product.id === id);
};

const ProductDetails = ({ params }: ProductDetailsProps) => {
  const { productId } = params;

  const product = getProduct(productId);

  const router = useRouter();

  return (
    <div className=" w-full max-w-6xl min-h-screen mx-auto my-20 flex flex-col justify-center gap-20">
      <div className=" grid grid-cols-2 gap-20">
        <Image
          as={NextImage}
          src={product?.imgUrl}
          alt={product?.productName}
          width={600}
          height={600}
          radius="lg"
          className=" bg-white object-contain w-full h-full min-w-[33.5rem] min-h-[33.5rem]"
        />
        <div className=" flex flex-col justify-start gap-10">
          <h1 className=" text-4xl">{product?.productName}</h1>
          <p className=" text-xl">category: {product?.category}</p>
          <p className=" text-base">{product?.shortDesc}</p>
          <p className=" text-3xl">${product?.price}</p>
          <AddToCart product={product} />
          <Button color="primary" onClick={() => router.push("/cart")}>
            Go to cart{" "}
          </Button>
        </div>
      </div>
      <div className=" flex flex-col gap-5">
        <h2 className=" text-3xl">Product Description</h2>
        <p className=" text-xl">{product?.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
