"use client";
import React, { useEffect, useState, useTransition } from "react";
import Container from "./container";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { logout } from "@/actions/logout";
import { User } from "next-auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu} from "lucide-react";
import { Cart } from "@/actions/redis";
import { FaCartShopping } from "react-icons/fa6";

function Navbar({ user, cart }: { user: User; cart: Cart | null }) {
  const [hidden, setHidden] = useState(false);
  const [pending, startTransition] = useTransition();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous && latest > 200) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  async function handleLogout() {
    startTransition(() => {
      logout();
    });
  }
  
  const totalItems = cart && cart.items ?
    cart?.items.reduce((total, item) => total + item.quantity, 0) : 0;

  return (
    <motion.header
      className="z-30 w-full h-[70px] flex items-center fixed bg-white"
      variants={{
        visible: { y: 0 },
        hidden: { y: "-101%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <Container>
        <div className="flex items-center justify-between text-black">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <svg
              className="h-8 w-8 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span className="ml-2 text-xl font-bold text-primary">Homify</span>
          </Link>
          <div className="hidden md:block">
            <ul className="flex gap-5">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/our-products"}>Products</Link>
              </li>
              <li>
                <a href="#" rel="noopener noreferrer">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" rel="noopener noreferrer">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:flex sm:items-center">
            <div className="hidden sm:flex sm:items-center">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="text-gray-700 hover:bg-transparent hover:text-primary"
                    >
                      <FaUser className="h-5 w-5 mr-1" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem>
                      {/* <User className="mr-2 h-4 w-4" /> */}
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      {/* <FaCartShopping className="mr-2 h-4 w-4" /> */}
                      <span>Orders</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                      {/* <LogOut className="mr-2 h-4 w-4" /> */}
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href={{
                    pathname: "/auth/login",
                  }}
                >
                  {/* <FaUser className="h-5 w-5 mr-1" /> */}
                  Sign In
                </Link>
              )}
            </div>
            <div className="flex gap-3 items-center md:block">
              <Link
                href={{
                  pathname: !user ? "/auth/login" : "/cart",
                }}
              >
                <Button
                  variant="ghost"
                  className=" text-gray-700 hover:bg-transparent hover:text-primary relative"
                >
                  <FaCartShopping className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </Link>

              <div className="sm:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  </SheetTrigger>
                  <SheetContent>
                    <div className="sm:hidden">
                      <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link
                          href="/"
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                        >
                          Home
                        </Link>
                        <Link
                          href="/our-products"
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                        >
                          Products
                        </Link>
                        <Link
                          href="#"
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                        >
                          About Us
                        </Link>
                        <Link
                          href="#"
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                        >
                          Contact Us
                        </Link>
                      </div>
                      <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="flex items-center px-4">
                          <div className="flex-shrink-0">
                            <FaUser className="h-10 w-10 rounded-full" />
                          </div>
                          <div className="ml-3">
                            <div className="text-base font-medium text-gray-800">
                              {user ? user.name : "Guest"}
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                              {user ? user.email : "Sign in to your account"}
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 space-y-1">
                          {user ? (
                            <>
                              <Link
                                href="/profile"
                                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-primary hover:bg-gray-100"
                              >
                                Your Profile
                              </Link>
                              <Link
                                href="/orders"
                                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-primary hover:bg-gray-100"
                              >
                                Orders
                              </Link>
                              <Button
                                variant="ghost"
                                onClick={handleLogout}
                                className="w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-primary hover:bg-gray-100"
                              >
                                Sign out
                              </Button>
                            </>
                          ) : (
                            <>
                              <Link
                                href={{
                                  pathname: "/auth/login",
                                }}
                                className="w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-primary hover:bg-gray-100"
                              >
                                <div>Sign in</div>
                              </Link>
                              <Link
                                href="/auth/register"
                                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-primary hover:bg-gray-100"
                              >
                                Register
                              </Link>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </motion.header>
  );
}

export default Navbar;
