import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import AddToCart from "./AddToCart";

export type Product = {
  id: string;
  productName: string;
  price: number;
  imgUrl: string;
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card shadow="sm" className=" w-full max-w-[16rem] max-h-96" radius="md">
      <CardBody className="overflow-visible p-0">
        <Image
          //   shadow="sm"
          //   radius="lg"
          width="100%"
          alt={`${product?.productName}`}
          className="w-full object-contain bg-white h-60 rounded-none"
          src={product?.imgUrl}
        />
      </CardBody>
      <CardFooter className="text-small flex-col items-start gap-5 justify-between">
        <p className=" text-xl text-start">{product?.productName}</p>
        <div className=" w-full flex items-center justify-between">
          <p className=" text-base">${product?.price}</p>
          <AddToCart product={product} />
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
