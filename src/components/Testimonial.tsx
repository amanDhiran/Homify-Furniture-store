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
    description: string;
  }

  const data: DataType[] = [
    {
      // 1
      className: "md:col-span-2",
      avatarImg: imageDaniel,
      name: "Daniel Clifford",
      heading:
        "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
      description:
        "I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ",
    },
    {
      // 2
      avatarImg: imageJonathan,
      name: "Jonathan Walters",
      heading: "The team was very supportive and kept me motivated",
      description:
        " I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself.  ",
    },
    {
      // 3
      className: "md:row-span-2",
      avatarImg: imageKira,
      name: "Kira Whittle",
      heading: "Such a life-changing experience. Highly recommended!",
      description:
        "Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ",
    },
    {
      // 4
      avatarImg: imageJeanette,
      name: "Jeanette Harmon",
      heading: "An overall wonderful and rewarding experience",
      description:
        "Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ",
    },
    {
      // 5
      className: "md:col-span-2",
      avatarImg: imagePatrick,
      name: "Patrick Abrams",
      heading:
        "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
      description:
        "The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ",
    },
  ];
  return (
    <div className="pt-10 pb-16">
    <Container >
      
      <div className="text-4xl font-bold text-center mb-20">What our buyers say</div>
      <div className="grid gap-6 grid-cols-1  md:grid-cols-4 md:grid-rows-2  ">
        {data.map((data, i) => (
          <div
            className={
              `p-6 ${i===0 || i===4? "md:col-span-2" : i === 2 ?"md:row-span-2" : ""} rounded-lg h-auto flex flex-col gap-4  max-w-[400px]  md:max-w-none bg-[#f7f7f7]`
            }
          >
            {/* avatar and name */}
            <section className="flex gap-2 ">
              <img
                src={data.avatarImg}
                alt="profile-img"
                className="rounded-full h-9 w-9 border-2"
              />
              <div>
                <div className="text-xs font-semibold">{data.name}</div>
                <p className="text-[10px]  opacity-50">Verified Buyer</p>
              </div>
            </section>

            <h3 className="  font-semibold text-lg ">{data.heading}</h3>
            <p className="text-xs    opacity-70 leading-relaxed ">
              “ {data.description} ”
            </p>
          </div>
        ))}
      </div>
    </Container>
    </div>
  );
}

export default Testimonial;
