import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full  px-4 md:flex-row">
        <div className="flex flex-col justify-center h-1/2 sm:h-full ">
          <TypeAnimation
            className="text-4xl sm:text-7xl font-bold text-white "
            sequence={["I'm a Frontend Developer", 1000]}
            speed={50}
            wrapper="h2"
          />

          <p className="text-gray-500 py-4 max-w-md">
            I have 5+ years of experience in building and designing software.
            Currently, I love to work on web applications using technologies
            like JavaScript, React, NextJs, Redux, Tailwind and Bootstrap.
          </p>
          <div>
            <Link
              to={"portfolio"}
              smooth
              duration={700}
              offset={window.screen.width > 768 ? -30 : -70}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500  to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowRight size={20} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-center h-1/3 sm:h-full max-w-[18rem]">
          <img
            src={HeroImage}
            alt="my profile pic"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
