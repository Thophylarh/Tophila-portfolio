import React from "react";
import Javascript from "../assets/javascript.bmp";
import Css from "../assets/css.bmp";
import ReactImg from "../assets/reactimg.bmp";
import Tailwind from "../assets/tailwind.bmp";
import Mongo from "../assets/mongo.bmp";
import Aws from "../assets/aws.bmp";

const Skills = () => {
  return (
    <div
      namme="skills"
      className=" bg-[#0a192f]  text-gray-300 w-full h-screen"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-pink-600 ">
            Experience
          </p>
          <p className="py-4">
            I have hands-on experience with a variety of technologies, such as
            Tailwind CSS, React.js, CSS, Next.js, TypeScript, and JavaScript.
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-4 py-8 text-center sm:grid-cols-4">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Css} alt="" />
            <p className="py-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="" />
            <p className="py-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Javascript} alt="" />
            <p className="py-4">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="" />
            <p className="py-4">Mongo</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="" />
            <p className="py-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Aws} alt="" />
            <p className="py-4">AWS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
