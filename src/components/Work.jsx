import React from "react";
import WorkImg from "../assets/workimg.bmp";

import remisImg from "../assets/remisImg.png";
import gptImg from "../assets/gptweb.png";
import shopImg from "../assets/shopImg.png";
import Demodsh from "../assets/demoDsh.png";
import FpImg from "../assets/fpImg.png";

const Work = () => {
  return (
    <div name="work" className="bg-[#0a192f] w-full md:h-screen text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>
        {/* container */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {/* Grid Item */}
          <div
            style={{
              backgroundImage: `url(${remisImg})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider text-white">
                Remis Website
              </span>
              <div className="pt-8 text-center">
                <a href="https://remis.africa/">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${gptImg})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider text-white">
                AI website
              </span>
              <div className="pt-8 text-center">
                <a href="http://mod-web.netlify.app">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${shopImg})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider text-white">
                E-commerce Demo
              </span>
              <div className="pt-8 text-center">
                <a href="https://egbon.netlify.app/">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${Demodsh})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider text-white">
                Dashboard Demo
              </span>
              <div className="pt-8 text-center">
                <a href="https://agy.netlify.app/">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${FpImg})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider text-white">
                Christpiracy
              </span>
              <div className="pt-8 text-center">
                <a href="https://new-xpiracy.vercel.app/">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    User
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${FpImg})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider text-white">
                Fuel Price
              </span>
              <div className="pt-8 text-center">
                <a href="https://fuelprice.ng/register">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${WorkImg})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider text-white">
                Christpiracy
              </span>
              <div className="pt-8 text-center">
                <a href="https://xpiracy-web-admin.vercel.app/sign-in">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Admin
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
