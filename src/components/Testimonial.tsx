import React from "react";
import imageDaniel from "../data/images/image-daniel.jpg";
import imageJonathan from "../data/images/image-jonathan.jpg";
import imageJeanette from "../data/images/image-jeanette.jpg";
import imagePatrick from "../data/images/image-patrick.jpg";
import imageKira from "../data/images/image-kira.jpg";
import Container from "./Container";

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
      avatarImg: imageDaniel,
      name: "Daniel Clifford",
      heading:
        "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
    },
    {
      // 2
      avatarImg: imageJonathan,
      name: "Jonathan Walters",
      heading: "The team was very supportive and kept me motivated",
    },
    {
      // 5
      className: "md:col-span-2",
      avatarImg: imagePatrick,
      name: "Patrick Abrams",
      heading:
        "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
    },
    // {
    //   // 1
    //   className: "md:col-span-2",
    //   avatarImg: imageDaniel,
    //   name: "Daniel Clifford",
    //   heading:
    //     "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
    // },
    // {
    //   // 2
    //   avatarImg: imageJonathan,
    //   name: "Jonathan Walters",
    //   heading: "The team was very supportive and kept me motivated",
    // },
    // {
    //   // 5
    //   className: "md:col-span-2",
    //   avatarImg: imagePatrick,
    //   name: "Patrick Abrams",
    //   heading:
    //     "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
    // },
  ];
  return (
    <div className="pt-10 pb-16">
      <Container>
        <div className="text-4xl font-bold text-center mb-20">
          What our buyers say
        </div>
        <div className="whitespace-nowrap scrollbar-none overflow-x-hidden overflow-y-hidden">
          <div className="animate-marquee">
            {data.map((data) => (
              <div className="inline-block mr-[20px]">
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

                  <h3 className=" whitespace-normal font-semibold text-lg ">{data.heading}</h3>
                </div>
              </div>
            ))}
            {data.map((data) => (
              <div className="inline-block mr-[20px]">
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

                  <h3 className=" whitespace-normal font-semibold text-lg ">{data.heading}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Testimonial;
