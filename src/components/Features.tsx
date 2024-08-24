import Container from "./container";
import { BiSupport } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import { BiCheckShield } from "react-icons/bi";

function Features() {
  return (
    <Container className="bg-[#F7F7F7] mt-20">
      <div className="text-center text-3xl font-bold pt-5">Why Choose us?</div>
      <div className="flex md:flex-row md:justify-center flex-col p-10 items-center">
        <div className="flex md:flex-row md:justify-center flex-col gap-14">
          <div className="flex items-center gap-4">
            <div className="">
              <FaShippingFast className="text-5xl md:text-6xl text-green-500" />
            </div>
            <div className="">
              <h3 className="font-bold">Free Shipping</h3>
              <p>Free shipping for order above $180</p>
            </div>
          </div>
          <div className="flex items-center  gap-4">
            <div>
              <BiCheckShield className="text-5xl md:text-6xl text-green-500" />
            </div>
            <div className="">
              <h3 className="font-bold">Quality Products</h3>
              <p>All products are quality tested</p>
            </div>
          </div>
          <div className="flex items-center  gap-4">
            <div>
              <BiSupport className="text-5xl md:text-6xl text-green-500" />
            </div>
            <div className="">
              <h3 className="font-bold">24*7 Support</h3>
              <p>We support online all days</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Features;
