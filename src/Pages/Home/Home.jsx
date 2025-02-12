import React from "react";
import Navbar from "../../components/Navbar";
import AiResponse from "../../components/Response";

const Home = () => {
  return (
    <div className="w-screen h-screen grid grid-rows-[auto_1fr] md:grid-rows-[auto_1fr]">
      <div className="bg-gray-200">
        <Navbar />
      </div>
      <div className="grid grid-cols-[20%_1fr] bg-gray-300">
        <div className="bg-slate-100"></div>
        <div className="bg-white">
          <AiResponse />
        </div>
      </div>
    </div>
  );
};

export default Home;
