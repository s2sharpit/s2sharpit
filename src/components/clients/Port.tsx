'use client'

import { useState } from "react";

var val = 0;

export default function Port() {
  const [activeIndex, setActiveIndex] = useState(val);
  const types = ["All", "Web", "App"];  

  val = activeIndex;
  return (
    <ul className="flex items-center gap-4 justify-center mb-2 text-lg font-medium text-neutral-700">
      {types.map((item, index) => (
        <li
          key={item}
          onClick={() => setActiveIndex(index)}
          className={`${
            activeIndex === index
              ? "bg-neutral-900 text-white"
              : "hover:text-neutral-800"
          } py-1 px-3 hover:cursor-pointer rounded-lg duration-300`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export {val};