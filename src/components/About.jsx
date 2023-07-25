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
              <p>
                Hi, I'm Tophila,  nice to meet you,
                 please take a look around.
              </p>
            </div>
            <div>
                <p>I am passionate about creating excellent software that enriches the lives of others. My specialization lies in developing software for a wide range of clients, from individuals and small businesses to large enterprise corporations. Imagine having a dedicated software expert who can analyze your needs and bring innovative solutions to life. Let's collaborate to turn your vision into reality and create software that sets you apart in the digital landscape.</p>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default About;
