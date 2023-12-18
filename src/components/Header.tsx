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
        <ShoppingBag />
        <p className="font-bold text-inherit px-2">DecorNest</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">
            <Badge
              color="danger"
              content={totalQuantity}
              //   isInvisible={isInvisible}
              shape="circle"
              size="sm"
            >
              <ShoppingCart size={25} />
            </Badge>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">Login</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
