"use client";

import { useState } from "react";
import {
  MdBusinessCenter,
  MdOutlineBusinessCenter,
  MdSchool,
  MdOutlineSchool,
} from "react-icons/md";
import { Button } from "@/components/ui";

let val = 2;

export default function QualiCli() {
  const [state, setState] = useState(val);
  val = state;
  return (
      <div className="flex mb-2 md:text-lg space-x-3">
        <Button
          variant={"link"}
          onClick={() => setState(1)}
          active={state === 1}
        >
          <span className="mr-1 text-2xl">
            {state === 1 ? <MdSchool /> : <MdOutlineSchool />}
          </span>
          Education
        </Button>
        <Button
          variant={"link"}
          onClick={() => setState(2)}
          active={state === 2}
        >
          <span className="mr-1 text-2xl">
            {state === 2 ? <MdBusinessCenter /> : <MdOutlineBusinessCenter />}
          </span>
          Certifications
        </Button>
      </div>
  );
}

export { val }