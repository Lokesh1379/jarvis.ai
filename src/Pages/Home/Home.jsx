import React from "react";
import Navbar from "../../components/Navbar";
import AiResponse from "../../components/Response";

const Home = () => {
  return (
    <div className="w-screen h-screen grid grid-rows-[auto_1fr] md:grid-rows-[auto_1fr]">
      <div className="bg-none">
        <Navbar />
      </div>
      <div className="grid md:grid-cols-[20%_1fr] ">
        <div className="bg-transperant border-r hidden md:block"></div>
        <div className="bg-white">
          <AiResponse />
        </div>
      </div>
    </div>
  );
};

export default Home;
