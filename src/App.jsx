import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("#7FC7D9");
  return (
    <div
      className="w-full h-screen duration-200 text-center text-3xl underline"
      style={{ backgroundColor: color }}
    >
      Nice Going!Moumita Seema
      <div className="fixed flex flex-wrap justify-center items-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap  justify-center gap-3 shadow-lg px-3 py-2 bg-white rounded-3xl  ">
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg  bg-[#6495ED]"
            onClick={() => setColor("#6495ED")}
          >
            Cornflower blue
          </button>
          <button
            className=" outline-none px-4 py-1 rounded-full text-black shadow-lg bg-[#9932CC]"
            onClick={() => setColor("#9932CC")}
          >
            Dark orchid
          </button>
          <button
            className=" outline-none px-4 py-1 rounded-full text-black shadow-lg bg-[#ADD899]"
            onClick={() => setColor("#ADD899")}
          >
            Lemon
          </button>
          <button
            className=" outline-none px-4 py-1 rounded-full text-black shadow-lg bg-[#F075AA]"
            onClick={() => setColor("#F075AA")}
          >
            Pink
          </button>
        </div>
      </div>
    </div>
  );
}
