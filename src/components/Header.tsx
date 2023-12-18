import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className=" flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-slate-900">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <Link
            className="inline-flex items-center gap-x-2 text-xl font-semibold dark:text-white"
            href="/"
          >
            Shopcom
          </Link>
        </div>
        <div>
          <Link
            className="font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="/cart"
          >
            <ShoppingBag />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
