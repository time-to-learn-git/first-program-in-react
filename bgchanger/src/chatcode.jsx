import React from 'react'

import { useState } from "react";

 function Chatcode() {
  const [bgColor, setBgColor] = useState("bg-red-600");

  return (
    <div
      className={`w-screen h-screen flex justify-center items-center ${bgColor} transition-colors duration-500`}
    >
      <div
        className="bg-white rounded-xl flex flex-wrap justify-center gap-4 p-4"
      >
        <button
          className="cursor-pointer rounded-xl border px-4 py-2 bg-red-600 text-white hover:scale-105 transition-transform duration-300"
          onClick={() => setBgColor("bg-red-600")}
        >
          red
        </button>
        <button
          className="cursor-pointer rounded-xl border px-4 py-2 bg-blue-600 text-white hover:scale-105 transition-transform duration-300"
          onClick={() => setBgColor("bg-blue-600")}
        >
          blue
        </button>
        <button
          className="cursor-pointer rounded-xl border px-4 py-2 bg-green-600 text-white hover:scale-105 transition-transform duration-300"
          onClick={() => setBgColor("bg-green-600")}
        >
          green
        </button>
        <button
          className="cursor-pointer rounded-xl border px-4 py-2 bg-orange-600 text-white hover:scale-105 transition-transform duration-300"
          onClick={() => setBgColor("bg-orange-600")}
        >
          orange
        </button>
        <button
          className="cursor-pointer rounded-xl border px-4 py-2 bg-black text-white hover:scale-105 transition-transform duration-300"
          onClick={() => setBgColor("bg-black")}
        >
          black
        </button>
      </div>
    </div>
  );
}


export default Chatcode
