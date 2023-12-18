import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto border-t border-gray-600">
      <div className="text-center">
        <div>
          <Link
            className="flex-none text-xl font-semibold text-black dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="/"
          >
            DecorNest
          </Link>
        </div>

        <div className="mt-3">
          <p className="text-gray-500">
            We&apos;re part of the{" "}
            <Link
              className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
              href="/"
            >
              DecorNest
            </Link>{" "}
            family.
          </p>
          <p className="text-gray-500">
            2022 © DecorNest. All rights reserved.
          </p>
        </div>

        <div className="mt-3 flex justify-center space-x-4">
          <Twitter />
          <Instagram />
          <Facebook />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
