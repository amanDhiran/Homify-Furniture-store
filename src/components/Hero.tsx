import React from "react";
import Container from "./Container";

function Hero() {
  return (
    <>
      <Container>
        <div className="overflow-hidden bg-hero-image rounded-3xl before:content-[''] before:absolute before:h-[88vh] before:z-[1] before:w-full before:bg-black/40 before:overflow-hidden z-10 relative bg-cover bg-center border h-[88vh]">
          <div className="z-20 relative flex-col flex md:px-24 items-start md:items-center justify-center py-16  gap-10  h-full px-7">
            <div className="text-white text-5xl  text-left  md:text-6xl lg:text-7xl md:text-center font-bold">
              Products that <span>Homify</span> your home.
            </div>
            <button className="bg-green-600 py-3 font-semibold text-white text-xl md:text-3xl md:py-3 px-5 flex items-center md:px-10 lg:py-4 rounded-full">
              Shop Now
            </button>
          </div>
        </div>

        {/* //why choose us */}
        <div className="flex md:flex-row md:justify-center flex-col p-10 gap-14 items-center">
          <div className="flex items-center flex-col">
            <div>ICON</div>
            <div className="text-center">
              <h3>Free Shipping</h3>
              <p>Free shipping for order above $180</p>
            </div>
          </div>
          <div className="flex items-center flex-col">
            <div >ICON</div>
            <div className="text-center">
              <h3>Free Shipping</h3>
              <p>Free shipping for order above $180</p>
            </div>
          </div>
          <div className="flex items-center flex-col">
            <div >ICON</div>
            <div className="text-center">
              <h3>Free Shipping</h3>
              <p>Free shipping for order above $180</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Hero;
