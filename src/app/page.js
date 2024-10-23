"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import ChangeLan from "@/components/ChangeLan";

export default function Page() {
  fetch("/api/loginApi");
  useEffect(() => {
    const func = async () => {
      try {
        const res = await fetch("/api/homeApi");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        console.log(res, data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    func();
  }, []); // 空依赖数组，确保只在组件挂载时调用一次

  return (
    <div>
      <Link href="/home">首页</Link>
      <Link href="/person">个人</Link>
      <ChangeLan />
    </div>
  );
}
