import React from "react";
import Container from "./container";

function Testimonial() {
  interface DataType {
    className?: string;
    bgColor?: string;
    textColor?: string;
    avatarImg: any;
    name: string;
    heading: string;
  }

  const data: DataType[] = [
    {
      // 1
      className: "md:col-span-2",
      avatarImg: "images/reviews/image-daniel.jpg",
      name: "Daniel Clifford",
      heading:
        "The quality of the furniture exceeded my expectations! I purchased a queen-size bed, and the craftsmanship is top-notch. The customer service was also fantastic throughout the buying process.",
    },
    {
      // 2
      avatarImg: "images/reviews/image-jonathan.jpg",
      name: "Jonathan Walters",
      heading: "Amazing selection and fast delivery! My new sofa arrived earlier than expected, and it looks perfect in my living room.",
    },
    {
      className: "md:col-span-2",
      avatarImg: "images/reviews/image-patrick.jpg",
      name: "Patrick Abrams",
      heading:
        "The whole experience was great, from browsing online to delivery. I love my new rustic bed! The build quality is solid, and the design adds a warm touch to my bedroom.",
    },
    

  ];
  return (
    <Container>
      <div className="pt-10 pb-16">
        <div className="text-4xl font-bold text-center mb-20">
          What our buyers say
        </div>
        <div className="whitespace-nowrap scrollbar-none overflow-x-hidden overflow-y-hidden">
          <div className="animate-marquee">
            {data.map((data, i) => (
              <div key={i} className="inline-block mr-[20px]">
                <div
                  className={`p-6 min-w-56 rounded-lg h-auto flex flex-col gap-4  max-w-md bg-[#f7f7f7]`}
                >
                  <section className="flex gap-2 ">
                    <img
                      src={data.avatarImg}
                      alt="profile-img"
                      className="rounded-full h-10 w-10 border-2"
                    />
                    <div>
                      <div className="font-semibold">{data.name}</div>
                      <p className="text-xs  opacity-50">Verified Buyer</p>
                    </div>
                  </section>

                  <h3 className=" whitespace-normal font-semibold text-lg ">
                    {data.heading}
                  </h3>
                </div>
              </div>
            ))}
            {data.map((data, i) => (
              <div key={i} className="inline-block mr-[20px]">
                <div
                  className={`p-6 min-w-56 rounded-lg h-auto flex flex-col gap-4  max-w-md bg-[#f7f7f7]`}
                >
                  <section className="flex gap-2 ">
                    <img
                      src={data.avatarImg}
                      alt="profile-img"
                      className="rounded-full h-10 w-10 border-2"
                    />
                    <div>
                      <div className="font-semibold">{data.name}</div>
                      <p className="text-xs  opacity-50">Verified Buyer</p>
                    </div>
                  </section>

                  <h3 className=" whitespace-normal font-semibold text-lg ">
                    {data.heading}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Testimonial;
