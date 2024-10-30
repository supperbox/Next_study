"use client";

import { useRouter } from "next/navigation";

export default function ChangeLan() {
  const router = useRouter();
  const changeLan = (lang) => {
    router.push(router.pathname, { locale: lang });
  };
  return (
    <>
      <button onClick={() => changeLan("zh_TW")}>繁体中文</button>
      <button onClick={() => changeLan("zh_CN")}>简体中文</button>
    </>
  );
}
