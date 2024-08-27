"use client"
import React, { useEffect, useState } from "react";
import Container from "./container";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { LoginButton } from "./auth/login-button";

function Navbar() {
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous && latest > 200) {
      setHidden(true);
      console.log("hidden");
    } else {
      setHidden(false);
      console.log("visible");
    }
  });

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
          <Link href={"/"} className="font-bold"> Homify </Link>
          <div className="hidden md:block">
            <ul className="flex gap-5">
              <li>Home</li>
              <li>Products</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="flex items-center gap-5">
            <FaUser className="text-xl"/>
            {/* TODO: wrap cart in LoginButton if the user is not logged in */}
            <LoginButton asChild>
              <FaCartShopping className="text-xl" />
            </LoginButton>
          </div>
        </div>
      </Container>
    </motion.header>
  );
}

export default Navbar;
