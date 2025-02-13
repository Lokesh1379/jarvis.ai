import React, { useState } from "react";
import AutoExpandingInput from "./components/AutoExapandInput";
import { SiIconfinder } from "react-icons/si";

const AiResponse = () => {
  const [searching, setSearching] = useState(false);
  return (
    <div className="grid grid-rows-[auto_1fr] h-full bg-gray-100">
      <div></div>
      <div className=" bg-white flex items-center justify-center  w-full relative ">
        <div className="fixed bottom-5 md:bottom-10 w-11/12 md:w-9/12 border rounded-xl shadow-lg p-2">
          <div className=" grid place-items-center m-1 ">
            <AutoExpandingInput />
          </div>
          <div className="flex w-full justify-between place-items-center  px-5">
            <div className="flex justify-between place-items-center  h-10">
              <div
                className={`flex items-center justify-between transition-opacity duration-500 ${
                  searching ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <img
                  src="assets/gifs/tbot.gif"
                  className="w-8 h-8 rounded-full"
                  alt="searching"
                />
                <span className="shimmer-text pl-1">Thinking ...</span>
              </div>
            </div>
            <button
              onClick={() => setSearching(!searching)}
              className=" ml-3 w-7 h-7 flex justify-center place-items-center  rounded-full bg-black text-white font-semibold  transition duration-200"
            >
              <SiIconfinder className="w-5 h-5 text-ehite" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiResponse;
