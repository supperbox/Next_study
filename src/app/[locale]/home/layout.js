import Link from "next/link";
import React from "react";

export default function Layout({ children, left }) {
  return (
    <div>
      {/* 左侧平行路由插槽 */}
      <div className="flex w-full h-[80vh] justify-center">
        <div className="flex items-center justify-center w-full h-full">
          {left}
        </div>
        <div className="flex items-center justify-center w-full">
          {children}
        </div>
      </div>
    </div>
  );
}
