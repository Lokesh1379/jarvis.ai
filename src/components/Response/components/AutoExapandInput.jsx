import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../../Features/searchresponse";
const AutoExpandingInput = () => {
  const { searchQuery } = useSelector((state) => state.searchData);
  const dispatch = useDispatch();
  const textAreaRef = useRef(null);

  // Function to auto-adjust height
  const handleInputChange = ({ target: { value } }) => {
    dispatch(setSearchQuery(value));
    // Reset height to auto and then set scroll height
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = `${Math.min(
      textAreaRef.current.scrollHeight,
      176
    )}px`; // max 44px * 4 = 176px
  };

  return (
    <textarea
      ref={textAreaRef}
      value={searchQuery}
      onChange={handleInputChange}
      placeholder="Ask Jarvis..."
      rows="1"
      className="w-full min-h-[44px] max-h-[176px] p-2 rounded-lg outline-none transition-all duration-200 resize-none overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"
    />
  );
};

export default AutoExpandingInput;
