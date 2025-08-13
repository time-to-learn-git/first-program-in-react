import { useState } from "react";

function App(props) {
  const [bgColor, setBgColor] = useState("bg-yellow-600");
  console.log(props.name)
  
  return (
    <>
     <div className={`transition-color duration-300 w-screen h-screen flex justify-center items-center ${bgColor}`}>
        <div className=" flex-wrap bg-white w-auto rounded-xl h-auto gap-6 flex justify-center p-2 text-white">
          <button className=" cursor-pointer rounded-xl border pl-4 pr-4 pt-2 pb-2 transform hover:scale-110  bg-red-600 " onClick={()=>{setBgColor("bg-red-600")}}>red</button>
          <button className=" cursor-pointer rounded-xl border pl-4 pr-4 pt-2 pb-2 hover:scale-105  bg-blue-600" onClick={()=>{setBgColor("bg-blue-600")}}>blue</button>
          <button className=" cursor-pointer rounded-xl border pl-4 pr-4 pt-2 pb-2 hover:scale-105  bg-green-600" onClick={()=>{setBgColor("bg-green-600")}}>green</button>
          <button className=" cursor-pointer rounded-xl border pl-4 pr-4 pt-2 pb-2 hover:scale-105  bg-orange-600" onClick={()=>{setBgColor("bg-orange-600")}}>orange</button>
          <button className=" cursor-pointer rounded-xl border pl-4 pr-4 pt-2 pb-2 hover:scale-105  bg-black" onClick={()=>{setBgColor("bg-black")}}>black</button>
        </div>
      </div>
    </>
  );
  
}


export default App;