import ProductList from "@/components/ProductList";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" min-h-screen">
      <div className="px-4 pt-20 text-center">
        <h1 className="text-4xl font-extrabold tracking-normal">DecorNest</h1>
        <p className=" mx-auto max-w-3xl mt-4 text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div>
        <main className=" mx-auto max-w-6xl px-6">
          <div className=" py-40">
            <ProductList />
          </div>
        </main>
      </div>
    </div>
  );
}
