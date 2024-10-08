import React from "react";
import Container from "@/components/Container";

function Footer() {
  return (
    <div className="bg-[#f7f7f7] pt-10 pb-5">
      <Container>
        <div className="flex w-full flex-wrap gap-10 md:px-20 px-5 py-6 justify-between  flex-col lg:flex-row">
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-xl">Homify</h2>
            <p>We help you homify your home.</p>
          </div>
          <div className="flex w-full flex-wrap  gap-10 justify-between">
            <div className="flex flex-col">
              <p className="font-bold mb-2 text-green-600">Company</p>
              <p>About Us</p>
              <p>Careers</p>
              <p>News</p>
            </div>
            <div className="flex flex-col ">
              <p className="font-bold mb-2 text-green-600">Support</p>
              <p>Contact Us</p>
              <p>Shipping & Returns</p>
              <p>FAQs</p>
            </div>
            <div className="flex flex-col ">
              <p className="font-bold mb-2 text-green-600">Follow Us</p>
              <p>Facebook</p>
              <p>Twitter</p>
              <p>Instagram</p>
              <p>Pinterest</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
