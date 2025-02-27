import React from "react";

const ChatResponse = ({ response, sender }) => {
  console.log(response, sender);
  const formatText = (text) => {
    const lines = text?.split("\n\n");

    return lines?.map((line, index) => {
      if (line.startsWith("```")) {
        return (
          <pre key={index} className="bg-gray-900 text-white ">
            <code>{line.replace(/```[a-z]*\n?/, "")}</code>
          </pre>
        );
      }

      if (line.startsWith("**")) {
        return (
          <p key={index} className="font-semibold text-lg my-2">
            {line.replace(/\*\*/g, "")}
          </p>
        );
      }

      return (
        <p key={index} className="text-gray-700 my-2">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="w-11/12 overflow-hidden">
      <h2 className="text-xl "></h2>
      <div>{formatText(response, sender)}</div>
    </div>
  );
};
export default ChatResponse;
