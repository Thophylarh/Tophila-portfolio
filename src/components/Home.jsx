import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600"> Hi my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Tophila Iwuala
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a Frontend Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a frontend developer specializing in creating exceptional digital
          experiences through responsive web applications. With an eye for
          aesthetics and a focus on user experience, I deliver visually
          captivating and functional interfaces. I stay updated on the latest
          trends and technologies, ensuring innovative and high-performance
          solutions. Let's collaborate to elevate your digital presence and
          engage your audience with immersive frontend solutions.
        </p>
        <Link to="work">
          <button className="flex items-center px-6 py-3 my-2 text-white border-2 group hover:bg-pink-600 hover:border-pink-600">
            View work
            <span className="duration-300 group-hover:rotate-90">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
