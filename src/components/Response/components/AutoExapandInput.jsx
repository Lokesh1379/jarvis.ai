import React, { useRef, useState } from "react";

const AutoExpandingInput = () => {
  const [value, setValue] = useState("");
  const textAreaRef = useRef(null);

  // Function to auto-adjust height
  const handleInputChange = (event) => {
    setValue(event.target.value);

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
      value={value}
      onChange={handleInputChange}
      placeholder="Ask Jarvis..."
      rows="1"
      className="w-full min-h-[44px] max-h-[176px] p-2  rounded-lg outline-none transition-all duration-200 resize-none overflow-y-scroll no-scrollbar"
    />
  );
};

export default AutoExpandingInput;
