import Collection from "@/components/collection";
import Container from "@/components/container";
import Features from "@/components/features";
import Hero from "@/components/hero";
import PopularProducts from "@/components/popular-products";
import Testimonial from "@/components/testinomial";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Collection />
      <PopularProducts />
      <Testimonial />
    </>
  );
}
