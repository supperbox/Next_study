import Link from "next/link";
import React from "react";

export default function D() {
  return (
    <div>
      <Link href="/lanjie/cc">to CC </Link>D
      <Link href={"/lanjie/cc"}>to CC2</Link>
    </div>
  );
}
