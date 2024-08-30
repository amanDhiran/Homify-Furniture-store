"use client";
import React, { useEffect, useState, useTransition } from "react";
import Container from "./container";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { LoginButton } from "./auth/login-button";
import { logout } from "@/actions/logout";
import { useSession } from "next-auth/react";
import { User } from "next-auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { signOut } from "@/auth";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu, X } from "lucide-react";

function Navbar({ user }: { user: User }) {
  const [hidden, setHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pending, startTransition] = useTransition();
  const { scrollY } = useScroll();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
          <Link href={"/"} className="font-bold">
            {" "}
            Homify{" "}
          </Link>
          <div className="hidden md:block">
            <ul className="flex gap-5">
              <li>Home</li>
              <li>Products</li>
              <li>About Us</li>
              <li>Contact Us</li>
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
                <LoginButton asChild>
                  <div>
                    {/* <FaUser className="h-5 w-5 mr-1" /> */}
                    Sign In
                  </div>
                </LoginButton>
              )}
            </div>
            <div className="flex gap-3 items-center md:block">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    className=" text-gray-700 hover:bg-transparent hover:text-primary"
                  >
                    <FaCartShopping className="h-5 w-5" />
                    <span className="sr-only">Open cart</span>
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Your Cart</SheetTitle>
                    <SheetDescription>
                      Review your items and checkout when you're ready.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-8">
                    {/* Cart items would go here */}
                    <p>Your cart is empty.</p>
                  </div>
                  <div className="mt-8">
                    <Button className="w-full">Proceed to Checkout</Button>
                  </div>
                </SheetContent>
              </Sheet>

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
                          href="/categories"
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                        >
                          Products
                        </Link>
                        <Link
                          href="/deals"
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                        >
                          About Us
                        </Link>
                        <Link
                          href="/new-arrivals"
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
                              {user ? "John Doe" : "Guest"}
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                              {user
                                ? "johndoe@example.com"
                                : "Sign in to your account"}
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
                              <LoginButton className="w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-primary hover:bg-gray-100">
                                <div>
                                  Sign in
                                </div>
                              </LoginButton>
                              <Link
                                href="/register"
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
