import { Card, CardBody, CardFooter } from "@nextui-org/react";

import Link from "next/link";
import AddToCart from "./AddToCart";
import ProductImage from "./ProductImage";

export type Product = {
  id: string;
  productName: string;
  imgUrl: string;
  category: string;
  price: number;
  shortDesc: string;
  description: string;
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card
      shadow="sm"
      className=" w-full max-w-[16rem] max-h-96 border border-slate-800 "
      radius="md"
    >
      <Link href={`/${product?.id}`}>
        <CardBody className="overflow-visible p-0">
          <ProductImage
            productName={product?.productName}
            imgUrl={product?.imgUrl}
          />
        </CardBody>
        <CardFooter className="text-small flex-col items-start gap-5 justify-between">
          <p className=" text-xl text-start">{product?.productName}</p>
          <div className=" w-full flex items-center justify-between">
            <p className=" text-base">${product?.price}</p>
            <AddToCart product={product} />
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default ProductCard;
