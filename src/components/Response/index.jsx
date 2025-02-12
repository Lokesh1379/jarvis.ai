import React from "react";

const AiResponse = () => {
  return (
    <div className="grid grid-rows-[4fr_1fr] h-full bg-gray-100">
      <div></div>
      <div className="border-t bg-white flex justify-center w-full p-4">
        <div className="w-full max-w-2xl flex items-center border border-gray-300 rounded-lg p-2 bg-white shadow-md">
          {/* Input Field */}
          <input
            type="text"
            className="w-full p-2 rounded-lg outline-none border border-gray-200 focus:border-blue-500 transition-all duration-200"
            placeholder="Search here..."
          />
          {/* Search Button */}
          <button className="ml-3 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiResponse;

// <img
//             src="assets/gifs/searching.gif"
//             className="w-12 h-12 rounded-full mr-3"
//             alt="searching"
//           />
