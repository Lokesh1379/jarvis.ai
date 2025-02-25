import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between place-items-center h-auto  w-auto px-10">
        <div>
          <h2 className="text-3xl">Jarvis.ai</h2>
        </div>
        <div>
          <img
            src="assets/images/mine.jpg"
            className="w-10 h-10 rounded-full m-1 border items-center"
            alt=""
            title="user"
          />
        </div>
      </div>
    </>
  );
};
export default Navbar;
