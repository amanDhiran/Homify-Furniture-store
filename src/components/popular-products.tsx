"use client"
import React, { useEffect, useState } from "react";
import Container from "./container";
import products from "../data/products.json";
import {motion} from 'framer-motion'
import Product from "./product";

let tabs = [
  { id: "sofa", label: "Sofa" },
  { id: "chair", label: "Chairs" },
  { id: "lamp", label: "Lamps" },
  { id: "bed", label: "Beds" },
];

function PopularProducts() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  const [data, setData] = useState(products.sofa);

  useEffect(() => {
    if(activeTab === "sofa"){
      setData(products.sofa)
    } else if(activeTab === "chair"){
      setData(products.chair)
    }
  }, [activeTab])

  return (
    <div className="bg-[#F7F7F7] py-10">
      <Container >
        <div>
          <div className="text-4xl text-center font-bold ">
            Pupolar Products
          </div>
        </div>
        {/* tabs */}
        <div className="flex my-10 justify-center">
          <div className="flex gap-5 bg-slate-400/25 p-1 rounded-3xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {setActiveTab(tab.id)

                }}
                className={`${
                  activeTab === tab.id
                    ? ""
                    : "hover:bg-slate-50/50"
                } relative rounded-full px-3 py-1.5 text-sm font-medium text-black  transition `}
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-white mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        {/* products container */}
        <div className="flex overflow-y-hidden gap-6 scrollbar-none ">
          {data.map((product)=> (
            <Product key={product.id} product={product}/>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default PopularProducts;
