"use client";

export const fetchCache = "force-cache"; // 该功能会覆盖默认的缓存策略，强制缓存；此时 revalidate 的作用只是将其变换为动态渲染；

import Image from "next/image";
async function getData() {
  // 接口每次调用都会返回一个随机的猫猫图片数据
  const res = await fetch("https://api.thecatapi.com/v1/images/search", {
    next: { tags: ["collection"] }, // 刷新标志
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default function Page() {
  let [data, setData] = useState([]);
  const fetchData = async () => {
    let res = await getData();
    setData(res);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-[20px]">
        <button
          onClick={() => {
            console.log(process.env.My_Name);
          }}
        >
          打印姓名
        </button>
        <button
          onClick={() => {
            console.log(process.env.NEXT_PUBLIC_Name);
          }}
        >
          打印姓名2
        </button>
        <button onClick={fetchData}>获取数据</button>
      </div>
      <Image src={data[0]?.url ?? ""} width={300} height={300} />
    </>
  );
}
