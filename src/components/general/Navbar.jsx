import React from "react";

function Navbar() {
  return (
    <div className="h-28 absolute top-0 px-8 bg-slate-900 w-full">
      <div className="flex h-full justify-between items-center">
        <h3 className="text-white font-bold text-xl capitalize">
          pharmacy blog
        </h3>
        <p className="text-white font-bold text-sm capitalize">
          <span>&#128522;</span> user is not available
        </p>
      </div>
    </div>
  );
}

export default Navbar;
