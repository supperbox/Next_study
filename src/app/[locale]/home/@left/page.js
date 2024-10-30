import Link from "next/link";
import React from "react";

export default function Left() {
  return (
    <div>
      <div className="flex gap-[20px] m-[20px] cursor-pointer">
        <Link href="/home/leftA">to A</Link>
        <Link href="/home/leftB">to B</Link>
      </div>
      <div>Left component</div>
    </div>
  );
}
