"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useSelector, useDispatch } from "react-redux";
import { add, show } from "@/store/features/login";
import { Button } from "antd";
import { useEffect } from "react";

export default function HomePage({ params: { locale } }) {
  const t = useTranslations("home");

  const name = useSelector((state) => state.login.name);
  const money = useSelector((state) => state.login.money);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/api/loginApi");
      const data = await res.json();
      console.log(data);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>{t("title")}</h1>
      <div>{name}</div>
      <div>{money}</div>
      <Link href="/home">{t("myProject")}</Link>
      <Button
        onClick={() => {
          dispatch(add());
        }}
      >
        赚钱
      </Button>
      <Button
        onClick={() => {
          dispatch(show());
        }}
      >
        出名
      </Button>
    </div>
  );
}
