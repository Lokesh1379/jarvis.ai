import React, { useState, useEffect, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ChatResponse from "./ChatResponse";

const ChatBot = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]); // Stores chat history
  const chatContainerRef = useRef(null);

  // Scroll to bottom when new messages are added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const fetchResponse = async () => {
    if (!userInput.trim()) return; // Prevent empty input

    const newUserMessage = { text: userInput, sender: "user" };
    setMessages((prev) => [...prev, newUserMessage]); // Add user input

    try {
      const genAi = new GoogleGenerativeAI(
        "AIzaSyCbiL-IicQINoyxHVq2hA2J3s1wkqf89U4"
      ); // Use .env for security
      const model = genAi.getGenerativeModel({ model: "gemini-1.5-pro" });

      const result = await model.generateContent(userInput);
      const botMessage = { text: result.response.text(), sender: "bot" };
      setMessages((prev) => [...prev, botMessage]); // Add AI response
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages((prev) => [
        ...prev,
        { text: "Something went wrong. Try again!", sender: "bot" },
      ]);
    }

    setUserInput(""); // Clear input after sending
  };

  return (
    <div className="w-screen h-screen flex flex-col md:flex-row ">
      {/* Sidebar */}
      <div className="w-full md:w-[20%] bg-slate-100 flex  justify-center p-5">
        <h1 className="text-center font-black text-3xl">Jarvis.ai</h1>
      </div>

      {/* Chat Section */}
      <div className="flex-1 flex flex-col justify-between items-center relative">
        {/* Chat Box */}
        <div
          ref={chatContainerRef}
          className="w-full max-w-2xl border p-4 rounded-lg shadow-lg min-h-[60vh] max-h-[70vh] overflow-y-auto"
        >
          {messages.map((msg, index) => (
            <ChatResponse key={index} response={msg.text} sender={msg.sender} />
          ))}
        </div>

        {/* Input Box */}
        <div className="w-full max-w-2xl fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-md flex">
          <input
            type="text"
            value={userInput}
            className="p-2 border w-3/4 rounded-md outline-none"
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button
            className="bg-gray-800 text-white py-2 px-4 rounded ml-2"
            onClick={fetchResponse}
          >
            Ask
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
