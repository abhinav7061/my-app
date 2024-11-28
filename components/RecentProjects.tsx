"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="py-10">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-20 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] lg:w-[550px]"
            key={item.id}
          >
            <PinContainer
              title="Click"
              href={item.link}
              className="w-[80vw] sm:w-96 lg:w-[550px]"
            >
              <div className="relative flex items-center justify-center w-full overflow-hidden h-[40vh] max-h-60 mb-10">
                <div
                  className="relative w-full h-full lg:rounded-xl overflow-hidden"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <Image
                  src={item.img}
                  alt="cover"
                  width={750}
                  height={410}
                  className="z-10 absolute bottom-0 rounded-xl "
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon?.logo} alt={icon?.name} className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <a href={item.link} target="_blank" className="flex lg:text-xl md:text-xs text-sm text-purple">
                    {item?.isLive ? "Check Live Site" : "Visit Repository"}
                  </a>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
