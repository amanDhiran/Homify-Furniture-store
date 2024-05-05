import React, { useEffect, useState } from "react";
import Container from "./Container";
import products from "../data/products.json";

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
                    ? "bg-white rounded-full"
                    : "hover:bg-slate-50/50"
                } relative rounded-full px-3 py-1.5 text-sm font-medium text-black outline-sky-400 transition focus-visible:outline-2`}
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {/* {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-white mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )} */}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex overflow-y-hidden gap-6 products-container">
          {data.map((product)=> (
            <div className="flex-shrink-0 bg-white overflow-hidden rounded-lg  flex flex-col h-72 md:h-auto w-60 md:w-72">
              <div className="md:h-3/4 p-4 pb-0  h-2/4">
                <img className="h-full w-full object-cover " src={`${product.thumbnail}`} alt="" />
              </div>
              <div className="px-8  pt-2 md:pb-5 ">
                <div className="text-slate-500 text-lg">{product.category}</div>
                <div className="text-lg font-semibold">{product.title}</div>
                <div className="mt-4 font-semibold">Rs.{product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default PopularProducts;
