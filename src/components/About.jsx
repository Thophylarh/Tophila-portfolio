import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="pb-8 pl-4 sm:text-right">
            <p className="inline text-4xl font-bold border-b-4 border-pink-600 ">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="text-4xl font-bold sm:text-right">
            <p>Hi, I'm Tophila, nice to meet you, please take a look around.</p>
          </div>
          <div>
            <p>
              I am deeply enthusiastic about crafting outstanding software that
              enhances the experiences of users. My expertise lies in creating
              software solutions for diverse clientele, spanning from
              individuals and small enterprises to large corporations. Picture
              having a committed software professional who can assess your
              requirements and transform them into innovative, real-world
              solutions. Let's work together to transform your ideas into
              reality and develop software that distinguishes you in the digital
              realm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
