import React, { useEffect, useState } from "react";
import Container from "./Container";
import products from "../data/products.json";
import {motion} from 'framer-motion'
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
        <div className="flex overflow-y-hidden gap-6 scrollbar-none ">
          {data.map((product)=> (
            <div className="flex-shrink-0 border border-slate-400/20 bg-white overflow-hidden rounded-lg flex flex-col h-auto md:h-auto w-60 md:w-72">
              <div className="md:h-3/4 p-4 pb-0  h-2/4">
                <img className="h-full w-full object-contain " src={`${product.thumbnail}`} alt="" />
              </div>
              <div className="px-8  pt-2 md:pb-5 pb-4 h-2/4 flex flex-col justify-between">
                <div>
                  <p className="text-slate-500 text-lg">{product.category}</p>
                  <p className="text-lg font-semibold">{product.title}</p>
                </div>
                <div className="flex mt-4 items-center justify-between">
                  <p className=" font-semibold">${product.price}</p>
                  <button className="px-3 bg-slate-200/40 hover:bg-black/20 transition-all duration-300 ease-in-out rounded-full py-2">Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default PopularProducts;
