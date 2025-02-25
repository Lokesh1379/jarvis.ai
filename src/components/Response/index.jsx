import React, { useEffect, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
// import ChatResponse from "./ChatResponse";
import AutoExpandingInput from "./components/AutoExapandInput";
import { SiIconfinder } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsSearching,
  setSearchQuery,
  setSearchResponse,
} from "../../Features/searchresponse";
import ChatResponse from "../ChatResponse";

const AiResponse = () => {
  const { searchQuery, isSearching, searchResponse } = useSelector(
    (state) => state.searchData
  );
  const dispatch = useDispatch();

  const chatContainerRef = useRef(null);

  // Scroll to bottom when new messages are added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [searchResponse]);

  const askJarvis = async () => {
    if (!searchQuery.trim()) return;
    dispatch(setIsSearching(true));
    setSearchResponse([
      ...searchResponse,
      { text: searchQuery, sender: "user" },
    ]);
    try {
      const genAi = new GoogleGenerativeAI(
        "AIzaSyCbiL-IicQINoyxHVq2hA2J3s1wkqf89U4"
      ); // Use .env for security
      const model = genAi.getGenerativeModel({ model: "gemini-1.5-pro" });

      const result = await model.generateContent(searchQuery);
      const botMessage = { text: result.response.text(), sender: "bot" };
      dispatch(setSearchResponse([...searchResponse, botMessage]));
      dispatch(setIsSearching(false));
      dispatch(setSearchQuery(""));
    } catch (error) {
      console.error("Error fetching AI response:", error);
      dispatch(setIsSearching(false));
      dispatch(
        setSearchResponse([
          ...searchResponse,
          { text: "Something went wrong. Try again!", sender: "bot" },
        ])
      );
    }
  };
  console.log(searchResponse);
  return (
    <div className="grid grid-rows-[auto_1fr] h-full  justify-center ">
      <div
        ref={chatContainerRef}
        className="w-screen  max-w-2xl border p-4 rounded-lg shadow-lg min-h-[60vh] max-h-[70vh] overflow-y-auto"
      >
        {searchResponse?.map((msg, index) => (
          <ChatResponse key={index} response={msg.text} sender={msg.sender} />
        ))}
      </div>

      <div className=" bg-white flex items-center justify-center  w-full relative ">
        <div className="fixed bottom-5 md:bottom-10 w-11/12 md:w-3/5 border rounded-xl shadow-lg p-2">
          <div className=" grid place-items-center m-1 ">
            <AutoExpandingInput />
          </div>
          <div className="flex w-full justify-between place-items-center  px-5">
            <div className="flex justify-between place-items-center  h-10">
              <div
                className={`flex items-center justify-between transition-opacity duration-500 ${
                  isSearching ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <img
                  src="assets/gifs/bot.gif"
                  className="w-8 h-8 rounded-full"
                  alt="searching"
                />
                <span className="shimmer-text pl-1">Thinking ...</span>
              </div>
            </div>
            <button
              onClick={askJarvis}
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
