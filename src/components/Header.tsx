"use client";

import { useAppSelector } from "@/redux/hooks";
import {
  Badge,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);

  return (
    <Navbar className=" bg-slate-900">
      <NavbarBrand>
        <Link href="/" className=" flex">
          <ShoppingBag width={30} height={30} className=" text-red-500" />
          <p className="font-bold text-inherit px-2 text-red-500">DecorNest</p>
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/cart">
            <Badge
              color="danger"
              content={totalQuantity}
              shape="circle"
              size="sm"
            >
              <ShoppingCart size={25} className=" text-red-500" />
            </Badge>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className=" text-red-500">
            Login
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
