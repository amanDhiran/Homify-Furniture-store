import React from "react";
import Container from "./Container";

function Features() {
  return (
    <Container>
      <div className="text-center text-2xl font-bold pt-5">Why Choose us?</div>
    <div className="flex md:flex-row md:justify-center flex-col p-10 gap-14 items-center">
      <div className="flex items-center flex-col">
        <div>ICON</div>
        <div className="text-center">
          <h3>Free Shipping</h3>
          <p>Free shipping for order above $180</p>
        </div>
      </div>
      <div className="flex items-center flex-col">
        <div>ICON</div>
        <div className="text-center">
          <h3>Free Shipping</h3>
          <p>Free shipping for order above $180</p>
        </div>
      </div>
      <div className="flex items-center flex-col">
        <div>ICON</div>
        <div className="text-center">
          <h3>Free Shipping</h3>
          <p>Free shipping for order above $180</p>
        </div>
      </div>
    </div>
    </Container>
  );
}

export default Features;
